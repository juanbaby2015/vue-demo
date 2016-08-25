<template>
  <form class="m-edtior" @submit="getvalidate()">
    <div class="item clearfix">
      <label class="item-title fl">商品类目：</label>
      <div class="fl edit">
        <span>父类目/子类目/儿子类目</span>
        <button type="button" class="btn btn-link glyphicon glyphicon-pencil" v-link="{path:'/choiceclass'}">编辑</button>
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">商品主图：</label>
      <div class="fl">
        <div class="pic glyphicon glyphicon-plus-sign"></div>
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">商品标题</label>
      <div class="fl">
        <input type="text" v-model="titleMsg">
      </div>
      <p class="fl tip">商品名称信息不唯一，字数限制为100个字符</p>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">商品详情：</label>
      <div class="fl">
        <div class="pic glyphicon glyphicon-plus-sign"></div>
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">大小：</label>
      <div class="fl">
        <input type="text"></div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">尺寸：</label>
      <div class="fl">
        <input type="text"></div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">原价：</label>
      <div class="fl">
        <input type="text"></div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">活动价</label>
      <div class="fl">
        <input type="text">
      </div>
    </div>
    <p>次商品活动金额比较大，采取分阶段付款的形式：线上支付定金99元，线下支付尾款x元</p>
    <div class="item clearfix">
      <label class="fl mr-20">是否采用特权订金 :</label>
        <input type="radio" name="sthandsel"> 否
        <input type="radio" name="sthandsel"> 是
    </div>
    <div class="item clearfix">
      <label class="item-title fl">预付订金：</label>
      <div class="fl">
        <input type="text">
      </div>
      <label class="fl ml-20">门店抵用：</label>
      <div class="fl">
        <input type="text">
      </div>
    </div>
    <p>玩法说明玩法说明测试玩法说明测试玩法说明测试玩法说明测试玩法说明测试测试</p>
    <div class="item clearfix">
      <label class="item-title fl">活动库存：</label>
      <div class="fl">
        <input type="text">
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">物流服务：</label>
        <input type="radio" name="stlogistics"> 无
        <input type="radio" name="stlogistics"> 免费
        <input type="radio" name="stlogistics"> 收费
    </div>
    <div class="item clearfix">
      <label class="item-title fl">安装服务：</label>
        <input type="radio" name="stinstall"> 无

        <input type="radio" name="stinstall"> 免费
        <input type="radio" name="stinstall"> 收费
    </div>
    <div class="item clearfix">
      <label class="item-title fl">质保年限：</label>
      <div class="fl">
        <input type="text">
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">所选商场</label>
      <div class="fl checkbox">
          <input type="radio"> 镇江大都会门店1
          <input type="radio"> 镇江大都会门店2
    </div>
    <div class="item clearfix">
      <label class="item-title fl">详情图: </label>
      <div class="fl">
        <a href="">上传文件</a>
        <span>请您将jpg、png图片先放在文件夹内，然后点此按钮上传文件夹</span>
      </div>
    </div>
    <div class="item clearfix">
      <label class="item-title fl">描叙: </label>
      <div class="fl">
        <textarea name="" id="" cols="50" rows="5" placeholder="请您填写此商品的价值点、我们会有的放矢的为您优化上线商品"></textarea>
      </div>
    </div>
  </form>

</template>
<script>

  require('../assets/scss/common.scss');
  export default {
    data () {
      return {
        'titleMsg': ' '
      }
    }
  }
</script>
<style lang="sass">
  .m-edtior {
    .edit {
      margin-top:-4px;
    }
    margin: 20px;
    .item {
      font-size: 16px;
      margin: 15px 0;
      label {
        font-family: 'PingFangSC-Regular', 'PingFang SC';
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        &.item-title {
          width: 100px;
        }
      }
      .edit {
        font-size: 14px;
        line-height: 28px;
      }
      .tip {
        margin-left: 10px;
      }
      .checkbox {
        label {
          display: block;
        }
      }
    }
     .pic {
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 1px solid #eee;
      line-height: 100px;
      text-align: center;
      font-size: 30px;
      margin-right: 20px;
    }
    .mr-20 {
      margin-right:10px;
    }
    .ml-20 {
      margin-left:10px;
    }
    input[type=radio] {
      margin:0 6px;
    }
  }

 
</style>
