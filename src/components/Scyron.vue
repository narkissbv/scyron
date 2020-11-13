<template>
  <div>
    <v-container>
      <h1>Scyron Home Assignment</h1>
      <h3>Task 1: Table</h3>
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
          :items="data"
          :search="search"
          class="elevation-1"
        >
          <!-- custom template for active column -->
          <template v-slot:[`item.active`]="{ item }">
            {{ isActive(item.active) }}
          </template>

          <!-- custom template for picture column -->
          <template v-slot:[`item.picture`]="{ item }">
            <img :src="item.picture"
                class="item-image"
            />
          </template>

          <!-- custom template for age column -->
          <template v-slot:[`item.birthday`]="{ item }">
            {{ getBirthday(item.birthday) }}
          </template>

          <!-- custom template for name column -->
          <template v-slot:[`item.name`]="{ item }">
            {{ `${item.name.first} ${item.name.last}` }}
          </template>

          <!-- custom template for tags column -->
          <template v-slot:[`item.tags`]="{ item }">
            <v-chip v-for="(chip, idx) in item.tags" :key="idx">
              {{ chip }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: [],
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
    isActive (isActive) {
      return isActive ? 'Active' : 'Inactive'
    },
    getBirthday(birthday) {
      birthday = new Date(birthday)
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  },
  mounted () {
    // populate table items from data.json
    axios.get('/data.json').then ( (resp) => {
      this.data = eval(resp.data)
    })
  }
}
</script>

<style lang="scss" scoped>
  .item-image {
    max-width: 50px;
    max-height: 50px
  }
</style>