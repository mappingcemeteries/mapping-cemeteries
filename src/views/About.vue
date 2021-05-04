<template dark>
  <div class="about">
    <v-card>
      <v-tabs v-model="tab" background-color="darkgray" dark grow>
        <v-tab> About the project </v-tab>
        <v-tab> About the Creators </v-tab>
        <v-tab> Contact Us </v-tab>
        <v-tab-item>
          <h2></h2>
          <v-card tile dark>
            <v-card-text class="text-center"
              >Our introduction to the project
            </v-card-text>
          </v-card>
          <v-row class="intro">
            <v-col cols="12" md="4">
              <v-img
                class="ml-10 mr-10"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/169326127_121021733399839_7468243779477365123_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=7rg1PK5pHZoAX92AKPi&_nc_ht=scontent-lga3-1.xx&oh=44711dff39685ba23c96864e1ef6afd7&oe=6097FA6B"
              ></v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="ml-10 mr-10"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/168751454_121021760066503_3231555397508698228_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=aCgK97xyC_gAX8tmzKd&_nc_ht=scontent-lga3-1.xx&oh=02d9ce97e97a15040251dfa9510e9d47&oe=6097D2B4"
              ></v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="ml-10 mr-10"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/168855656_121021820066497_3410991152136923722_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=qkEeEyHdhDgAX9yZTdJ&_nc_ht=scontent-lga3-1.xx&oh=ab552fec36d09083dacbab7da907f3b7&oe=60974965"
              ></v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="ml-10 mr-10"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/169134219_121021796733166_3461938036758036341_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QQuJLx3zEu4AX8J8z3Z&_nc_ht=scontent-lga3-1.xx&oh=cb4aac77515deacec82949b4e0685187&oe=609918CB"
              ></v-img>
            </v-col>
            <v-col cols="12" md="4">
              <v-img
                class="ml-10 mr-10"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/169558885_121021776733168_5936852692700829422_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=XljTMPDcklsAX8DZIkN&_nc_ht=scontent-lga3-1.xx&oh=60aaa31a2acefb9cfabb3b74f0441dab&oe=609856A3"
              ></v-img>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="intro">
            <v-col>
              <v-card class="ml-1 mr-1 card" color="#D3D3D3">
                <v-card-title>
                  <span class="title font-weight-bold">Brianna Caszatt</span>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/04/Justice_Statue_Gravatar.png"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-actions>
                </v-card-title>

                <v-card-text class="font-weight-light">
                  Brianna hails from Michigan but has called Queens home for
                  almost 13 years. She is a copy chief and copy editor by day
                  and a graduate student in the MA in Digital Humanities (DH)
                  program at the CUNY Graduate Center by night. Joining the DH
                  community has definitely been her best pandemic decision. And
                  buying more sweatpants. DH and sweatpants: the two best
                  pandemic decisions by far. Mapping Cemeteries brings together
                  her interests (some old and some new-found) in social justice,
                  memory studies, infrastructure, and mapping. The original idea
                  for the project was hers, but what the project has become is
                  so much more than she ever could have expected, and it is all
                  thanks to the creative and collaborative energy of the entire
                  team. As project manager, she has created a group space for
                  everyone’s internal communications and workflow needs, she
                  sets the meeting agendas and keeps notes during each meeting,
                  and she makes sure blockers are addressed and goals are met.
                  She is also responsible for the researching and data
                  collection of a cemetery that was redeveloped and turned into
                  a public park: City Hall Park.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="ml-1 mr-1" color="#D3D3D3">
                <v-card-title>
                  <span class="title font-weight-bold">Lisa Kofod</span>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-spacer></v-spacer>
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/War_Memorial_Swords_Shield_Close-Up.png"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-actions>
                </v-card-title>

                <v-card-text class="font-weight-light">
                  Lisa is a writer and producer, they are also a digital
                  humanities student working toward their Master of Arts in the
                  Digital Humanities at the Graduate Center of the City
                  University of New York (CUNY). A life-long New Yorker, they
                  were drawn to this project because of their love of New York
                  City history and their fascination with how we choose to
                  remember those who came before. How do we determine who
                  “deserves” to be remembered? What do those remembrances look
                  like? How have these remembrances changed over time? Their
                  primary roles in this project were site design and testing.
                  This included working with the developer on which platform to
                  use and what frameworks to apply, creating best practices for
                  the incorporation of digital assets, and testing the site as
                  it was developed. Their secondary roles were in documentation
                  and research. Documentation included tracking conversations
                  during the development stage and encouraging the team away
                  from scope creep. Research responsibilities included working
                  on technical options and scholarly research on a set of war
                  memorials within Manhattan.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="ml-1 mr-1" color="#D3D3D3">
                <v-card-title>
                  <span class="title font-weight-bold">Asma N. </span>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-spacer></v-spacer>
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://images.unsplash.com/photo-1606170300294-84f3213babe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-actions>
                </v-card-title>

                <v-card-text class="font-weight-light">
                  Asma (aahs-ma) N. is a Brooklyn native, Digital Humanist,
                  Black feminist, and a graduate student at The Graduate Center,
                  CUNY. She serves as a Lead in academic research and audio
                  production for Mapping Cemeteries (MC). MC is a Digital
                  Humanist Timeline project that visualizes the cartographic
                  relationship between identity and death across distinct
                  Deathscapes of NYC. She also supports MC’s Outreach and is
                  currently producing the limited series audio project, Mapping
                  Cemeteries: After Life, an audio project about the lines that
                  brought the Team and their work together (exclusive to the MC
                  SoundCloud page).
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="ml-1 mr-1" color="#D3D3D3">
                <v-card-title>
                  <span class="title font-weight-bold">Nadia El Mouldi</span>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="http://3.bp.blogspot.com/-_Sqq5JpNPAc/Ulyvd9u7zzI/AAAAAAAAIMM/NXY2CuWWuVQ/s1600/peck.jpg"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-actions>
                </v-card-title>

                <v-card-text class="font-weight-light">
                  Nadia is a software engineer and a graduate student in the
                  Master of Arts in Digital Humanities program at CUNY. She has
                  graduated with a BA in Computer Science and Statistics,
                  helping her to develop skills in software design and
                  development with a focus on ethical practices and critical
                  problem solving. This has sparked her interest in developing
                  Digital Humanities projects that incorporate data
                  visualization and web application spanning a range of topics.
                  As a team member in the Mapping Cemeteries Project, Nadia is
                  responsible for the web development and mapping effort. This
                  includes framework and tool selection, as well as
                  implementation and testing. She is also responsible for a
                  portion of the research and data collection, pertaining to
                  historic cemeteries in New York City.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="ml-1 mr-1" color="#D3D3D3">
                <v-card-title>
                  <span class="title font-weight-bold">Lane Vineyard</span>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img
                          class="elevation-6"
                          alt=""
                          src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Coffin_%281%29.png"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-actions>
                </v-card-title>

                <v-card-text class="font-weight-light">
                  lane vineyard is a first-year student at the CUNY Graduate
                  Center currently pursuing a master’s in Digital Humanities.
                  They currently hold a B.A. in Linguistics, with minors in
                  Spanish and Mandarin, from Middle Tennessee State University.
                  Though they have some educational background in the arts and
                  humanities, they have only recently begun delving into the
                  field of Digital Humanities. Their research interests include
                  queer culture and history, digital mapping tools, design, and
                  studying the intersection of language and identity with DH
                  tools. lane’s primary role for the project is outreach, which
                  entails the creation and maintenance of an online presence for
                  the project. Additionally, they do primary research for one of
                  the cemeteries showcased in the project, which is a cemetery
                  that was repurposed, rediscovered, and now exists again as
                  both a cemetery and national monument
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item class="form" height="1000px">
          <form height="500px" class="mr-15 ml-15">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              dense
              v-model="message"
              label="message"
              required
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </v-tab-item></v-tabs
      ></v-card
    >
  </div>
</template>



<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      tab: null,
      items: ["About the Project", "About the Creators", "Contact Us"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

<style>
.form {
  height: 1000px;
  background-color: lightgray;
}
.intro {
  background-color: lightgray;
  color: lightgray;
}

.card {
  color: lightgray;
}
</style>