<script lang="ts" setup>
import { GetUsersDocument, CreateUserDocument } from '.types/gql/graphql';

const { result } = useQuery(GetUsersDocument)
result.value?.users?.map((u) => {
  u.age
})

const { mutate } = useMutation(CreateUserDocument)
const newUser = await mutate()

</script>

<template>
  <div>
    <p>{{ result }}</p>
    <p>{{ newUser }}</p>
  </div>
</template>
