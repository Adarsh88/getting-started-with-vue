import { ref } from "@vue/reactivity";

const getPosts = () => {
  const posts = ref([
    {
      title: "Welcome to blog",
      body:
        "lorem aklsnfdljasleawj iogshjoifdja oisjfisj fvoi/;asfjoifnos fhaskjf beskjfbseifaes feasofhaewof n oas dn clkaesjfuaehfou esahoaeijfolsnf/v/uelfnae sofnauoiesfn wakasdasdfdsjf sjdf ajif jawieojf iosjdoi jfasdofjaeoijfoi sjdoifjesoif asnfsaen fouhseoifoi asjfpoa jep",
      id: 1,
      tags: ["webdev", "coding", "news"],
    },
    {
      title: "Top 5 CSS tips",
      body: "asasdas",
      id: 2,
      tags: ["css", "webdev", "coding"],
    },
  ]);

  const showPosts = ref(true);

  return { posts, showPosts };
};

export default getPosts;
