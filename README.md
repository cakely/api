# Cakely API
> The world's most comprehensive API...for cakes!

## About

This repository contains an Node.js API server emitting [JSON](server/api/services/cakes.service.ts) – of course about cakes. It is also provides interactive OpenAPI documentation. 👌

A GitHub Actions workflow ([`ci.yaml`](.github/workflows/ci.yml)) is configured to run tests upon `pull_request` and then build a container image and push it to AWS ECR upon merge to the `master` branch. Self hosted runner "ECR Push" is used in this workflow to communicate to a pre-configured instance of Vault using an AppRole with the `ecr-push` policy. See [`cakely/vault-runner-setup`](https://github.com/cakely/vault-runner-setup) for details.

## Context

This repo is the technical complement to a webinar entitled Secure GitOps Workflows with GitHub Actions and HashiCorp Vault, delivered on August 25<sup>th</sup> 2020, which can be viewed online [**here**](https://www.hashicorp.com/resources/secure-gitops-workflows-with-github-actions-and-hashicorp-vault).

The work here represents the final state of the demos and workflows that were presented as a part of that webinar. It is recommended to view this repo in the context of that webinar.

You are here 🍰:
* **🍰 [`cakely/api`](https://github.com/cakely/api) 🍰 - Node.js example app providing "the world's most comprehensive API...for cakes!"**
* [`cakely/api-ops`](https://github.com/cakely/api-ops)
* [`cakely/vault-runner-setup`](https://github.com/cakely/vault-runner-setup)

For more goodness related to cake, GitHub, and Terraform, kindly view the previous webinar entitled [Unlocking the Cloud Operating Model with GitHub Actions](https://www.hashicorp.com/resources/unlocking-the-cloud-operating-model-with-github-actions/).

## License

[MIT](LICENSE)

## Credits

* https://github.com/cdimascio/generator-express-no-stress-typescript - 🚄 A Yeoman generator for Express.js based 12-factor apps and apis using Typescript
