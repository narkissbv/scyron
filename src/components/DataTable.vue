<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="computedData"
        :search="search"
        class="elevation-1"
      >
        <!-- custom template for active column -->
        <template v-slot:[`item.active`]="{ item }">
          <div :class="{'active' : item.active === 'active'}"
                class="status">
            <div :inner-html.prop="item.active | highlight(search)">
            </div>
          </div>
        </template>

        <!-- custom template for picture column -->
        <template v-slot:[`item.picture`]="{ item }">
          <img :src="item.picture"
              class="item-image"
          />
        </template>

        <!-- custom template for age column -->
        <template v-slot:[`item.birthday`]="{ item }">
          <div :inner-html.prop="item.birthday | highlight(search)">
          </div>
        </template>

        <!-- custom template for name column -->
        <template v-slot:[`item.name`]="{ item }">
          <div :inner-html.prop="item.name | highlight(search)">
          </div>
        </template>

        <!-- custom template for name column -->
        <template v-slot:[`item.phone`]="{ item }">
          <div :inner-html.prop="item.phone | highlight(search)">
          </div>
        </template>


        <!-- custom template for tags column -->
        <template v-slot:[`item.tags`]="{ item }">
          <v-chip v-for="(chip, idx) in item.tags" :key="idx">
            <div :inner-html.prop="chip | highlight(search)">
            </div>
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  filters: {
    highlight: function(value, query){
      return value.replace(new RegExp(query, "ig"), '<span class=\'yellow\'>' + query + '</span>')
    }
  },
  data () {
    return {
      data: [],
      computedData: [],
      search: '',
      headers: [
        {
          text: 'ID',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Status',
          sortable: true,
          value: 'active'
        },
        {
          text: 'Image',
          sortable: false,
          value: 'picture'
        },
        {
          text: 'Age',
          sortable: true,
          value: 'birthday'
        },
        {
          text: 'Name',
          sortable: true,
          value: 'name'
        },
        {
          text: 'MSISDN',
          sortable: true,
          value: 'phone'
        },
        {
          text: 'Tags',
          sortable: false,
          value: 'tags'
        }
      ]
    }
  },
  methods: {
    getBirthday(birthday) {
      birthday = new Date(birthday)
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970) + '';
    }
  },
  mounted () {
    // populate table items from data.json
    axios.get('/data.json').then ( (resp) => {
      let data = eval(resp.data)
      // mapping the different values into clear JS object
      data.forEach( (item) => {
        this.computedData.push({
          id: item.id,
          active: (item.active) ? 'active' : 'inactive',
          picture: item.picture,
          birthday: this.getBirthday(item.birthday),
          name: `${item.name.first} ${item.name.last}`,
          phone: item.phone,
          tags: item.tags
        });
      })
    })
  },
}
</script>

<style scoped>
  .status {
    background-color: lightcoral;
    padding: 5px;
    text-align: center;    
  }
  .status.active {
    background-color: lightblue
  }
  .item-image {
    max-width: 50px;
    max-height: 50px
  }
</style>