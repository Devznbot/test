- name: Setup repo
  uses: actions/checkout@v4

- name: Setup Deno
  uses: denoland/setup-deno@v2
  with:
    deno-version: v1.x
