 <template>
  <div class="app" @mousewheel="test">
    <nav-bar/>
    <router-view/>
    <custom-footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import CustomFooter from "@/components/CustomFooter"
import firebase from 'firebase'
export default {
  name: "App",
  components: {
    NavBar,
    CustomFooter
  },
  data () {
    return {
    }
  },
  methods: {
    test(event) {
      //@TODO if you want more smoothness
      //   let bottomOfWindow =
      //       document.documentElement.scrollTop + window.innerHeight ===
      //       document.documentElement.offsetHeight;
      //   let topOfWindow =
      //     document.documentElement.scrollTop === 0
      //   if (event.deltaY < 0 & topOfWindow) {
      //     console.log("srolling up at top");
      //   }
      //   if (event.deltaY > 0 & bottomOfWindow) {
      //     console.log("scrolling down at bottom")
      //   }
    },
    getProjects() {
      return firebase
        .database()
        .ref('projects/')
        .once('value', snapshot => {
            console.log(snapshot.val())
        });
    }
  },
  mounted() {
    console.log("mounted");
    this.getProjects()
  },
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Fabien Ogli',
      // all titles will be injected into this template
      titleTemplate: '%s | My Porfolio'
    }
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
