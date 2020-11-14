<template>
  <div>
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2">Course name</th>
          <th class="w-1/4 px-4 py-2">Author</th>
          <th class="w-1/4 px-4 py-2">Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in courses" :key="index">
            <td class="border px-4 py-2">Intro to CSS</td>
            <td class="border px-4 py-2">Intro to CSS</td>
            <td class="border px-4 py-2">Intro to CSS</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CourseSelector",
};
</script>
