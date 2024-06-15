# file_deployment

This is a *very* simple role that will copy files to the managed nodes using `ansible.builtin.copy`.

## Badges
<!-- markdownlint-disable MD013 -->
| Badge |
| :---  |
| [![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit) |
| [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) |
| [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) |
| [![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/sscheib/ansible-role-file_deployment/badge)](https://scorecard.dev/viewer/?uri=github.com/sscheib/ansible-role-file_deployment) |
| [![gitleaks](https://img.shields.io/badge/gitleaks-enabled-blue.svg)](https://github.com/gitleaks/gitleaks) |

| Workflow Badge |
| :------------  |
| [![ansible-lint](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-lint.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-lint.yml) |
| [![CodeQL](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/github-code-scanning/codeql) |
| [![commitlint](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/commitlint.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/commitlint.yml) |
| [![gitleaks](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/gitleaks.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/gitleaks.yml) |
| [![markdown link check](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/markdown-link-check.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/markdown-link-check.yml) |
| [![markdownlint](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/markdownlint.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/markdownlint.yml) |
| [![Publish to Ansible Galaxy](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/release.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/release.yml) |
| [![pyspelling](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/pyspelling.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/pyspelling.yml) |
| [![Renovate](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/renovate.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/renovate.yml) |
| [![Scorecard supply-chain security](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/scorecard.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/scorecard.yml) |
<!-- markdownlint-enable MD013 -->

## Role Variables

| variable                                     | default                      | required | description                                                                    |
| :---------------------------------           | :--------------------------- | :------- | :----------------------------------------------------------------------------- |
| `fd_files`                                   | unset                        | true     | Files to deploy. See below for an extended example how to define it            |
| `fd_quiet_assert`                            | `false`                      | false    | Whether to quiet the assert statements                                         |

## Variable `fd_files`

An extended example of only the `fd_files` variable is illustrated down below:

```yaml
fd_files:
  - src: 'sshd_motd'
    dest: '/etc/motd'
    owner: 'root'
    group: 'root'
    mode: '0644'

  - src: 'sshd_issue.net'
    dest: '/etc/issue.net'
    owner: 'root'
    group: 'root'
    mode: '0644'

  - content: >-
      This is my text
    dest: '/home/steffen/test'
    owner: 'steffen'
    group: 'steffen'
    mode: '0400'
```

The attributes `dest`, `owner`, `group` and `mode` are required as well as either `src` or `content`. These attributes are validated for their *existence*. The permission
attributes are deliberately enforced (although `ansible.builtin.copy` does not require them) to avoid accidental unsafe file deployments which have too broad permissions.
This way, a user needs to consciously decide to set broad permissions.

The variables are **not** validated whether they have the correct type, etc. The only validation is the aforementioned existence of the attributes.

This role supports all attributes of [`ansible.builtin.copy`](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html) which are supported at
the time of this writing (04.02.2024).

## Dependencies

None

## Example Playbook

```yaml
---
- name: 'Deploy files'
  hosts: 'all'
  gather_facts: false
  roles:
    - role: 'file_deployment'
      vars:
        fd_quiet_assert: false
        fd_files:
          - src: 'sshd_motd'
            dest: '/etc/motd'
            owner: 'root'
            group: 'root'
            mode: '0644'

          - src: 'sshd_issue.net'
            dest: '/etc/issue.net'
            owner: 'root'
            group: 'root'
            mode: '0644'

          - content: >-
              This is my text
            dest: '/home/steffen/test'
            owner: 'steffen'
            group: 'steffen'
            mode: '0400'
...
```

## Contributing

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued.
Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for different ways to help and details about how this project handles contributions.

## License

[`GPL-2.0-or-later`](LICENSE)
