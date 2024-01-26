Welcome to my meltano dbt evidence project!

### Using the starter project

Activate environment:
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```


To install meltano plugins:

```bash
meltano install
#run extractor data and loader
meltano run tap-csv target-postgres
```

Try running the following commands for `dbt`:

```bash
meltano run dbt-postgres:run
meltano run dbt-postgres:test
```

Using Data replication:
```bash
meltano run tap-postgres target-duckdb
```

To run evidence:

```bash
nvm use 18.0.0
npm --prefix ./reports install
npm --prefix ./reports run dev
```

### Resources:
- Learn more about dbt [in the docs](https://docs.getdbt.com/docs/introduction)
- Check out [Discourse](https://discourse.getdbt.com/) for commonly asked questions and answers
- Join the [chat](https://community.getdbt.com/) on Slack for live discussions and support
- Find [dbt events](https://events.getdbt.com) near you
- Check out [the blog](https://blog.getdbt.com/) for the latest news on dbt's development and best practices
