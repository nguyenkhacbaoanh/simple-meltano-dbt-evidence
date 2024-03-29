---
title: Welcome to Migration SG - CDN (simple simulator)
---

# What's migration ???

The SG - CDN Migration is the initial computerized transfer of Credit du Nord customer data onto the Societe Generale network as part of the merger of the two networks. Here are examples of the transfer of accounting data, comparing the amounts before and after the transfer (over multiple periods) on operating system scopes.


# Simple reporting table
*Data have been generated by [Data Generator](https://generatedata.com/generator)*

*I simulate data with same schema data that i worked on, my goal is trying to work with [Evidence-dev](https://evidence.dev/) instead of using `PowerBI` (real project) as reporting part.*
```kpi
select * from analytics.kpi
```

<DataTable data="{kpi}" rows=10 search="true" rowShading="true" sortable="true" />

*KPI have been calculated base on `accounting_period` and `so` identify, but in a real project that i made, this rule are really complicated and there many surrogate key to build from different referential data*

- `Matched` is an indicator to determine whether a contract ID from CDN post-migration has been located in the SG system or not.
- The `Status` indicates whether the amount for a contract ID has been reconciled between CDN and SG or not.

```kpi_data
select 
	case when matched is true then 'matched' else 'Unmatched' end as source,
	'migration' as target,
	count(matched) as count
from analytics.kpi
group by 1, 2
union 
select
	'migration' as source,
	status as target,
	count(status) as count
from analytics.kpi
group by 1, 2
;
```

<SankeyDiagram
    data={kpi_data}
    title="Global View Migration KPI SG - CDN"
    subtitle="Matched vs Reconciled"
    sourceCol=source
    targetCol=target
    valueCol=count
/>


## Audit - identify all gaps

```nonmatched
select 
	raw_sg.date, accounting_period,
	'Societe Generale' as company, raw_sg.department, raw_sg.so, raw_sg.contract_number, currency
from analytics.kpi kpi
left join raw.sg raw_sg
on kpi.sg_company = raw_sg.company 
	and kpi.accounting_period = concat(substring(raw_sg.date, 1, 4), substring(raw_sg.date, 6, 2))
	and kpi.so = raw_sg.so
where matched is false and sg_company is not null 
--order by raw_sg.date, accounting_period, raw_sg.so, raw_sg.department, raw_sg.contract_number, currency
union
select 
	raw_cdn.date, accounting_period,
	'CDN' as company, raw_cdn.department, raw_cdn.so, raw_cdn.contract_number, currency
from analytics.kpi kpi
left join raw.cdn raw_cdn
on kpi.cdn_company = raw_cdn.company 
	and kpi.accounting_period = concat(substring(raw_cdn.date, 1, 4), substring(raw_cdn.date, 6, 2))
	and kpi.so = raw_cdn.so
where matched is false and cdn_company is not null 
order by date, accounting_period, so, department, contract_number, currency
```

```sg_count_nonmatched
select 
    company,
    concat('/company/', company) as link_company,
    count(distinct so) as nonmatched_so,
    count(distinct contract_number) as nonmatched_contract
from ${nonmatched}
--where company = 'Societe Generale'
group by 1
```
See [Gaps Investigation](/company) for more information.

Click a row to see the report for that company:
<DataTable data="{sg_count_nonmatched}" link=link_company/>