{{
  config(
    materialized='table'
  )
}}

with join_group as (
	select 
		sg.company as sg_company,
		coalesce(sg.accounting_period, cdn.accounting_period) as accounting_period,
		coalesce(sg.so, cdn.so) as so,
		cdn.company as cdn_company,
		sum(sg.amount + cdn.amount) as ecart,
		case 
			when cdn.company is null or sg.company is null then False
			else True
		end as Matched,
		case 
			when abs(round(sum(sg.amount + cdn.amount))) = 0 then 'Reconcillie'
			else 'Non Reconcillie'
		end as Status
	from {{ ref('stg_sg') }} sg
	full join {{ ref('stg_cdn') }} cdn
	on sg.accounting_period = cdn.accounting_period
		and sg.so = cdn.so
	group by sg.company, sg.accounting_period, cdn.accounting_period, sg.so, cdn.so, cdn.company
),
result as (
	select * from join_group
	order by accounting_period asc, so asc
)
select *
from result
