<template>
    <div class="employeePage">
      <SubPageHeroCom image="/images/campus1.jpg" title="Ansatte" top="0 bottom"></SubPageHeroCom>
      <div class="employees">
        <div class="employee" v-for="employee in employees">
          <img :src="employee.image" alt="">
          <p class="title">{{ employee.title }}</p>
          <p>{{ employee.name }}</p>
          <p>Direkte tlf: <a class="exLink" :href="`tel:${employee.tel}`">{{ employee.tel }}</a></p>
          <p>Email: <a class="exLink" :href="`mailTo:${employee.email}`">{{ employee.email }}</a></p>
        </div>
    </div>
    </div>
  </template>
  <script setup>
    const employees = ref([
      {
        name:"Dan Verbaum",
        title:"Partnere",
        tel:"23 35 10 04",
        email:"dv@design.dk",
        image:"/images/employees/Dan_verbaum.jpg"
      },
      {
        name:"John P. Herluf",
        title:"Partnere",
        tel:"23 35 10 04",
        email:"jph@design.dk",
        image:"/images/employees/john_p_herluf.jpg"
      },
      {
        name:"Niels Hoy Hansen",
        title:"Partnere",
        tel:"23 35 10 06",
        email:"nhh@design.dk",
        image:"/images/employees/Niels_Hoy_Hansen.jpg"
      },
      {
        name:"Lene Ryum",
        title:"Sekretær",
        tel:"23 35 10 01",
        email:"lr@design.dk",
        image:"/images/employees/Lene_ryum.jpg"
      },
      {
        name:"Mikkel Arbusen",
        title:"Tegnestue",
        tel:"23 35 10 07",
        email:"ma@design.dk",
        image:"/images/employees/Mikkel_arbusen.jpg"
      },
      {
        name:"Henriette Klausen",
        title:"Tegnestue",
        tel:"23 35 10 08",
        email:"hk@design.dk",
        image:"/images/employees/Henriette_Klausen.jpg"
      }
    ])
  </script>
  <style lang="scss">
    .employees{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: var(--contentWidthLg);
      margin: auto;
      gap: 1rem;
      .employee{
        padding: var(--spacingLg);
        background-color: var(--secondaryBg);
        border-radius: var(--radiusMd);
        .title{
          font-weight: bold;
          margin-bottom: var(--spacingSm)
        }
        img{
          width: 100%;
          border-radius: var(--radiusMd);
          margin-bottom: var(--spacingMd);
          background-color: var(--tertiaryBg);
        }
      }
      @media(max-width:1100px){
        grid-template-columns: 1fr 1fr;
      }
      @media(max-width:700px){
        grid-template-columns: 1fr;
      }
    }
  </style>