# Gaps Investigation
*Written by Anh NGUYEN in January 2024*

*Analysis covers the time period of October 2022 to January 2024. All queries have been limited to that range.*

## All contract number have been unmatched:

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
    concat('/company/', company) as company_link,
    count(distinct so) as nonmatched_so,
    count(distinct contract_number) as nonmatched_contract
from ${nonmatched}
--where company = 'Societe Generale'
group by 1
```

<DataTable data="{sg_count_nonmatched}" link=company_link rows=10 search="true" rowShading="true" sortable="true" />
