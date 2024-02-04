[![ansible-lint](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-lint.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-lint.yml) [![Publish latest release to Ansible Galaxy](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-galaxy.yml/badge.svg)](https://github.com/sscheib/ansible-role-file_deployment/actions/workflows/ansible-galaxy.yml)

file_deployment
=========
This is a *very* simple role that will copy files to the managed nodes using `ansible.builtin.copy`.

Role Variables
--------------
| variable                                     | default                      | required | description                                                                    |
| :---------------------------------           | :--------------------------- | :------- | :----------------------------------------------------------------------------- |
| `fd_files`                                   | unset                        | true     | Files to deploy. See below for an extended example how to define it            |
| `fd_quiet_assert`                            | `false`                      | false    | Whether to quiet the assert statements                                         |

## Variable `fd_files`

An extended example of only the `fd_files` variable is illustrated down below:
```
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
attributes are deliberately enforced (althought `ansible.builtin.copy` does not require them) to avoid accidental unsafe file deployments which have too broad permissions.
This way, a user needs to consciously decide to set broad permissions.

The variables are **not** validated whether they have the correct type, etc. The only validatation is the aforementioned existence of the attributes.

This role supports all attributes of [`ansible.builtin.copy`](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html) which are supported at
the time of this writing (04.02.2024).

Dependencies
------------

None

Example Playbook
----------------

```
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

License
-------

GPL-2.0-or-later
