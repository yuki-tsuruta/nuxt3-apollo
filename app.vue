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

const { data } = useAsyncQuery(query)

const mutation = gql`mutation CreateUser {
  createUser(newUser: {name: "test", age: 28})
}`

const { mutate } = useMutation(mutation)
const result = await mutate()

</script>

<template>
  <div>
    <p>{{ data }}</p>
    <p>{{ result }}</p>
  </div>
</template>
