<template>
<div class="about-card">
  <div class="card-title">
    <div class="avatar-card">
      <img src="../assets/Kishore.png" alt="avatar" class="avatar" />
    </div>
    <div class="title-text-content">
      <h1 class="title">About Me</h1>
      <h2 class="author">Kishore Kumar</h2>
    </div>
  </div>
  <div class="card-content">

    <p class="card-content-para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      placeat inventore eum officia velit esse vero, tempore distinctio
      laborum vitae ipsum, impedit, libero quae hic numquam labore quisquam
      aspernatur dolorem?
    </p>

    <div class="table">
      <div class="first div">
        <h3>Area of Usage</h3>
        <h3>Skill Sets</h3>
      </div>
      <div class="second div">
        <h5>Design</h5>
        <p>Photoshop, Figma, Canva, Adobe XD</p>
      </div>
      <div class="third div">
        <h5>Front-End</h5>
        <p>React JS, HTML5, CSS3, Java Script, Vue JS</p>
      </div>
      <div class="fourth div">
        <h5>Back-End</h5>
        <p>Node JS, Python, Mongo, Postman</p>
      </div>
    </div>

    <p class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptates atque quod molestiae at debitis eius et, officia pariatur sit dolore quasi quidem repellat iusto dolor eum ullam velit excepturi.</p>

    <p class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptates atque quod molestiae at debitis eius et, officia pariatur sit dolore quasi quidem repellat iusto dolor eum ullam velit excepturi.</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.about-card {
  background: #333;
  color: #fff;
  padding: 20px 5px;
  margin: 10px 5px;
  border-radius: 10px;
}

.avatar-card {
  display: block;
  width: 150px;
  margin: 0 auto;
  padding-top: 20px;
}

.avatar {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 5px 15px #111;
}

.title-text-content {
  width: 100%;
  text-align: center;
  padding-top: 30px;
}

.title {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 400;
}

.author {
  padding: 10px 0px;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: cyan;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-content-para {
  padding: 10px 0;
  font-size: 15px;
}

.table {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
}

.first {
  padding-bottom: 10px;
  text-transform: uppercase;
}

.first,
.second,
.third,
.fourth {
  padding-bottom: 5px;
  text-align: center;
}

.first h3 {
  font-size: 20px;
  font-weight: 500;
}

h5 {
  font-size: 20px;
  font-weight: 300;
}

p {
  font-weight: 300;
  text-align: start;
}

.para {
  font-weight: 300;
  padding-bottom: 10px;
}
</style>
