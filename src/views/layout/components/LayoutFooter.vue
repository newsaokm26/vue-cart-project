<template>
  <footer class="app_footer">
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">關於我們</a>
            <a href="javascript:;">幫助中心</a>
            <a href="javascript:;">售後服務</a>
            <a href="javascript:;">配送與驗收</a>
            <a href="javascript:;">商務合作</a>
            <a href="javascript:;">搜尋推薦</a>
            <a href="javascript:;">友情連結</a>
          </p>
          <p>CopyRight © 雪拚購</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.app_footer {
  background-color: #4bb9b0;
  height: 370;
  color: #656060;
  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;

    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      line-height: 1;
      padding: 0 10px;
      color: #656060;
      border-right: 1px solid #656060;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
