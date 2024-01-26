# Gap Investigation detail for {$page.params.company}
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

```sg_count_nonmatched_filtered
select 
    company,
    concat('/company/', company) as link_company,
    count(distinct so) as nonmatched_so,
    count(distinct contract_number) as nonmatched_contract
from ${nonmatched}
group by 1
```

## Key facteurs
- There were <Value data={sg_count_nonmatched_filtered.filter(d => d.company.toLowerCase() === $page.params.company.toLowerCase())} column=nonmatched_so/>
 system operation which <Value data={sg_count_nonmatched_filtered.filter(d => d.company.toLowerCase() === $page.params.company.toLowerCase())} column=nonmatched_contract/> contracts problemes during migration, our auditeur can more details to make manuals entries for next phase.


<DataTable data={nonmatched.filter(d => d.company.toLowerCase() === $page.params.company.toLowerCase())} search="true">
	<Column id="date"/>
	<Column id="department"/>
	<Column id="so"/>
	<Column id="contract_number"/>
	<Column id="currency"/>
</DataTable>
