<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData (context) {
    return context.app.$axios.$get(`posts/${context.params.postid}.json`)
    .then(data => {
      return {loadedPost: { ...data, id: context.params.postid }}
    })
    .catch(e => context.error(e))
  },
  components: { AdminPostForm },
  methods: {
    onSubmitted (editedPost) {
      console.log(editedPost)
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

