<template>
  <v-flex>
    <v-container grid-list-lg style="padding-top:5px;">
      <v-layout row wrap style="padding-bottom:20px">
        <v-flex xs12>
          <v-carousel style="height:350px">
          <v-carousel-item v-for="(item,i) in images" :src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="padding-bottom:20px">
          <v-flex  xs3 v-for="(item,i) in posts" :key="i">
            <v-card>
              <v-card-media
                class="white--text"
                height="150px"
                :src=item.avatar              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{item.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">{{item.author}}</span><br>
                  <span>{{item.shortText}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap style="padding-bottom:20px;max-height:1020px">
          <v-flex xs8>
            <v-layout v-for="(item, i) in itemPosts" :key="i" style="padding-bottom:10px;max-height:250px">
              <v-flex xs12 >
                <v-card >
                  <v-layout style="padding-top:10px">
                      <v-flex xs5>
                        <img width="250px" height="200px" :src="item.avatar">
                      </v-flex>
                      <v-flex xs7>
                        <v-layout style="max-height:50px">
                          <h2>{{item.title}}</h2>
                        </v-layout>
                        <v-layout style="max-height:125px">
                          <p>{{item.subtitle}}</p>
                        </v-layout>
                        <v-layout>
                          <v-flex xs9></v-flex>
                          <v-flex xs3 class="text-xs-center">
                            <v-btn small  round color="primary" dark>Read More</v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4>
            <v-layout style="max-height:50px">
              <v-flex xs12 pa-0>
                <v-chip color="indigo" text-color="white" style="width:100%" >
                  <v-avatar>
                    <v-icon>account_circle</v-icon>
                  </v-avatar>
                  <h2>About & Social</h2>
                </v-chip>
              </v-flex>
            </v-layout>
            <v-layout style="max-height:310px">
                <v-flex xs12 pa-0>
                  <v-card>
                    <v-card-media src="/static/images/desert.jpg" height="300px">
                    <v-layout column class="media">
                      <v-spacer></v-spacer>
                      <v-card-title class="white--text pl-5 pt-5">
                      <div class="display-1 pl-5 pt-5">Beatboxer</div>
                      </v-card-title>
                    </v-layout>
                    </v-card-media>
                  </v-card>
                </v-flex>
            </v-layout>
            <v-layout style="max-height:80px">
              <v-flex xs4 class="text-xs-center">
                <v-btn round color="red darken-3" dark><v-icon>fab fa-google-plus-g</v-icon></v-btn>
              </v-flex>
              <v-flex xs4 class="text-xs-center">
                <v-btn round color="light-blue darken-3" dark><v-icon>fab fa-facebook-f</v-icon></v-btn>
              </v-flex>
              <v-flex xs4 class="text-xs-center">
                <v-btn round color="light-blue lighten-3" dark><v-icon>fab fa-twitter</v-icon></v-btn>
              </v-flex>
            </v-layout>
            <v-layout style="max-height:50px">
              <v-flex xs12 pa-0>
                <v-chip color="indigo" text-color="white" style="width:100%" >
                  <v-avatar>
                    <v-icon>fab fa-typo3</v-icon>
                  </v-avatar>
                  <h2>Popular</h2>
                </v-chip>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 >
                <v-card>
                  <v-list three-line>
                    <template v-for="(item, index) in populars">
                      <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                      <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                      <v-list-tile avatar v-else :key="item.title" @click="fc()">
                        <v-list-tile-avatar>
                          <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.title"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
  </v-flex>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      images: [
        {
          src: '/static/images/docks.jpg'
        },
        {
          src: '/static/images/desert.jpg'
        },
        {
          src: '/static/images/house.jpg'
        },
        {
          src: '/static/images/plane.jpg'
        }
      ],
      posts: [
        {
          title: 'Top 10 Australian beaches',
          author: 'Admin',
          shortText: 'Whitsunday Island, Whitsunday Islands',
          avatar: '/static/images/desert.jpg'
        },
        {
          title: 'Top 10 Australian beaches',
          author: 'Admin',
          shortText: 'Whitsunday Island, Whitsunday Islands',
          avatar: '/static/images/house.jpg'
        },
        {
          title: 'Top 10 Australian beaches',
          author: 'Admin',
          shortText: 'Whitsunday Island, Whitsunday Islands',
          avatar: '/static/images/plane.jpg'
        },
        {
          title: 'Top 10 Australian beaches',
          author: 'Admin',
          shortText: 'Whitsunday Island, Whitsunday Islands',
          avatar: '/static/images/docks.jpg'
        }
      ],
      itemPosts: [
        {
          avatar: '/static/images/sunshine.jpg',
          title: 'Top 10 Australian beaches',
          subtitle: 'Whitsunday Island, Whitsunday Islands-I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        {
          avatar: '/static/images/docks.jpg',
          title: 'Top 10 Australian beaches',
          subtitle: 'Whitsunday Island, Whitsunday Islands-I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        {
          avatar: '/static/images/plane.jpg',
          title: 'Top 10 Australian beaches',
          subtitle: 'Whitsunday Island, Whitsunday Islands-I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        {
          avatar: '/static/images/desert.jpg',
          title: 'Top 10 Australian beaches',
          subtitle: 'Whitsunday Island, Whitsunday Islands-I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        {
          avatar: '/static/images/house.jpg',
          title: 'Top 10 Australian beaches',
          subtitle: 'Whitsunday Island, Whitsunday Islands-I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        }
      ],
      populars: [
        { header: 'Today' },
        { avatar: '/static/images/plane.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: '/static/images/house.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: '/static/images/desert.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: '/static/images/docks.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: '/static/images/sunshine.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    }
  },
  methods: {
  }
}
</script>
