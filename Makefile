db:
	docker container run -it --name anytime-db --rm \
		-e POSTGRES_PASSWORD=postgres \
		-e POSTGRES_DB=anytime \
		-p 5432:5432 \
		postgres:latest