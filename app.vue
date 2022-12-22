<script lang="ts" setup>

const query = gql`
  query getUsers {
    users {
      age
      id
      name
    }
  }
`

const { result } = useQuery(query)
</script>

<template>
  <div>
    <p>{{ result }}</p>
  </div>
</template>
