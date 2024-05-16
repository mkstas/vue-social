import { ref } from "vue";
import { defineStore } from "pinia";
// import axios from '../axios'

export const useTagStore = defineStore("tag", () => {
  const tags = ref([
    {
      _id: "Html",
      title: "Html",
    },
    {
      _id: "Css",
      title: "Css",
    },
    {
      _id: "JavaScript",
      title: "JavaScript",
    },
  ]);

  // const get = async (userId) => {
  // 	try {
  // 		const response = await axios.get('/tag')

  // 		tags.value = [ ...response.data ]
  // 	} catch (error) {

  // 	}
  // }

  return {
    tags,
    // get,
  };
});
