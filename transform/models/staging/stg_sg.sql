{{
    config(materialized='view')
}}

select
		company,
		concat(substring(date, 1, 4), substring(date, 6, 2)) as accounting_period,
		--department,
		so,
		sum(cast(REPLACE(currency, '€', '') as float)) as amount
  from {{ source('raw', 'sg')}}
	group by 1,2,3--,4
	order by accounting_period asc