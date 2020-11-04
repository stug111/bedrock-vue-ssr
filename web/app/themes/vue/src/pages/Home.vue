<template>
  <div>
    <div>Home</div>
    <ul>
      <li
        v-for="post in posts.nodes"
        :key="post.id"
      >
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    posts: gql`
        query {
          posts {
            nodes {
              date
              excerpt
              id
              title
            }
          }
        }
    `
  }
}
</script>