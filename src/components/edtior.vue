<template>
  <validator name="validation1">
    <form class="m-edtior" novalidate>
      <h3 class="tit">基础信息</h3>
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
          <div class="pic imgPreview" id="pic">
            <img src='../assets/images/static.jpg' alt="" id="img"></div>
          <span class="glyphicon glyphicon-plus-sign filebox">
            <input type="file" class="myfile"  @change='previewImage("file","pic","img")' id="file"></span>
        </div>
      </div>
      <div class="item clearfix">
        <label class="item-title fl">商品标题</label>
        <div class="fl">
          <input id="prdctname" type="text" v-validate:prdctname="{required: true, maxlength: 3}"></div>
        <p class="errors fl tip">
          <span v-if="$validation1.prdctname.required">商品名称信息不能为空</span>
          <span v-if="$validation1.prdctname.maxlength">长度不超过100个字符</span>

        </p>
      </div>
      <div class="item clearfix">
        <label class="item-title fl">商品详情：</label>
        <div class="uploadlist clearfix">
          <div class="dspic" v-for="n in fileNum">
            <div class="pic" id="pic-{{n}}">
              <img src='../assets/images/static.jpg' id="img-{{n}}"></div>
            <span class="glyphicon glyphicon-plus-sign filebox">
                <input type="file" class="myfile"   id="file-{{n}}" @change='getfilelist(this)' ></span>
          </div>

        </div>
      </div>
      <h3 class="tit">商品属性</h3>
      <div class="item clearfix">
        <label class="item-title fl" for="username">大小：</label>
        <div class="fl username-field">
          <input type="text" id="username" type="text"></div>
      </div>
      <div class="item clearfix">
        <label class="item-title fl">尺寸：</label>
        <div class="fl">
          <input type="text"></div>
      </div>
      <h3 class="tit">价格／库存</h3>
      <div class="item clearfix">
        <label class="item-title fl">原价：</label>
        <div class="fl">
          <input type="text" v-validate:oldprice="['numform']"></div>
      </div>
      <p class="errors">
        <span v-if="$validation1.oldprice.numform">只能输入数字，小数点后两位，小数点前最长7位</span>
        <span v-if="$validation1.oldprice.required">不能为空</span>
      </p>
      <div class="item clearfix">
        <label class="item-title fl" type="text">活动价</label>
        <div class="fl">
          <input type="text" v-validate:lowprice="['numform']" v-model="payfor"></div>
      </div>
      <p class="errors">
        <span v-if="$validation1.lowprice.numform">只能输入数字，小数点后两位，小数点前最长7位</span>
      </p>
      <p v-if="payfor>200 && type=='normal' && deposit==0">
        <span class="cashtips"><label class="grey">次商品活动金额比较大，采取分阶段付款的形式：</label></span> 线上支付定金99元，线下支付尾款
        <label class="livepay">{{payfor-99}}</label>元
      </p>

      <div class="item clearfix">
        <label class="fl mr-20">是否采用特权订金 :</label>
        <input type="radio" v-model="deposit" value="0" checked> 否
        <input type="radio" v-model="deposit" value="1">是
      </div>
      <div class="isdeposit" v-if="deposit==1">
        <div class="item clearfix">
          <label class="item-title fl">预付订金：</label>
          <div class="fl">
            <input type="text" v-validate:prepay="['numform']"></div>

          <label class="fl ml-20">门店抵用：</label>
          <div class="fl">
            <input type="text" v-validate:vouchers="['numform']"></div>
        </div>
        <p class="errors">
          <span v-if="$validation1.prepay.numform">订金只能输入数字，小数点后两位，小数点前最长7位</span>
          <span v-if="$validation1.vouchers.numform">门店抵用只能输入数字，小数点后两位，小数点前最长7位</span>
        </p>
        <p>玩法说明：玩法说明测试玩法说明测试玩法说明测试玩法说明测试玩法说明测试测试</p>
      </div>

      <div class="item clearfix">
        <label class="item-title fl">活动库存：</label>
        <div class="fl">
          <input type="text"></div>
      </div>
      <h3 class="tit">服务／门店</h3>
      <div class="item clearfix">
        <label class="item-title fl">物流服务：</label>
        <input type="radio" v-model='wuliu' value=0 checked> 无
        <input type="radio" v-model='wuliu' value=1> 免费
        <input type="radio" v-model='wuliu' value=2>收费</div>
      <div class="item clearfix">
        <label class="item-title fl">安装服务：</label>
        <input type="radio" name="stinstall" checked> 无
        <input type="radio" name="stinstall"> 免费
        <input type="radio" name="stinstall">收费</div>
      <div class="item clearfix">
        <label class="item-title fl">质保年限：</label>
        <div class="fl">
          <input type="text" v-validate:years="{ maxlength: 60 }"></div>
      </div>
      <p class="errors">
        <span v-if="$validation1.years.maxlength">长度不能超过60个字符</span>
      </p>
      <div class="item clearfix">
        <label class="item-title fl">所选商场</label>
        <div class="fl checkbox">
          <input type="radio" name="store"> 镇江大都会门店1
          <input type="radio" name="store">镇江大都会门店2
        </div>
        </div>
        <h3 class="tit">备注</h3>
        <div class="item clearfix">
          <label class="item-title fl">描叙:</label>
          <div class="fl">
            <textarea name="memo" id="" cols="50" rows="5" placeholder="请您填写此商品的价值点、我们会有的放矢的为您优化上线商品" v-validate:memo="{ maxlength: 100 }"></textarea>
          </div>
        </div>
        <p class="errors">
          <span v-if="$validation1.memo.maxlength">长度不能超过100个字符</span>
        </p>

        <input type="submit" value="提交" class="btn btn-success" v-if="$validation1.valid"></form>

  </validator>

</template>
<script>
import Vue from 'vue'
//自定义验证
Vue.validator('numform',
function(val) {
    return /^[0-9]{0,7}([.][0-9]{0,2})?$/.test(val) && val.length > 0
});
require('../assets/js/libs/jquery-3.1.0.js');
require('../assets/scss/common.scss');
export
default {
        data() {
            return {
                type:"normal",
                payfor:'',
                fromdata:{},
                wuliu:0,
                anzhuang:0,
                deposit:0,
                fileNum:1

            }
        },
        methods: {
            previewImage: function(fileid, boxid, picid) { //图片预览
                var MAXWIDTH = 260;
                var MAXHEIGHT = 180;
                var file=document.getElementById(fileid);
                var div = document.getElementById(boxid);
                var _self=this;
                if (file.files && file.files[0]) {
                    div.innerHTML = '<img id=' + picid + '>';
                    var img = document.getElementById(picid);
                    img.onload = function() {
                        var rect = _self.clacImgZParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                        img.width = rect.width;
                        img.height = rect.height;
                    }
                    var reader = new FileReader();
                    reader.onload = function(evt) {
                        img.src = evt.target.result;
                    }
                    reader.readAsDataURL(file.files[0]);
                    this.filelistAdd(div.parentElement);
                    return ;
                } 
                //兼容IE
                    var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                    file.select();
                    var src = document.selection.createRange().text;
                    div.innerHTML = '<img id=' + picid + '>';
                    var img = document.getElementById(picid);
                    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                    var rect = _self.clacImgZParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                    status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
                    div.innerHTML = "<div id=" + picid + " style='width:" + rect.width + "px;height:" + rect.height + "px;" + sFilter + src + "\"'></div>";
                    this.filelistAdd(div.parentElement);
            },
            getfilelist:function(e){
              var $input=$(e.$event.target),
                  $pic=$input.parents('.dspic').find('.pic'),
                  $img=$pic.find('img');
                  e.previewImage($input.attr('id'), $pic.attr('id'), $img.attr('id'));
            },
            clacImgZParam:function(maxWidth, maxHeight, width, height) {
                var param = {
                    top: 0,
                    left: 0,
                    width: width,
                    height: height
                };
                if (width > maxWidth || height > maxHeight) {
                    rateWidth = width / maxWidth;
                    rateHeight = height / maxHeight;

                    if (rateWidth > rateHeight) {
                        param.width = maxWidth;
                        param.height = Math.round(height / rateWidth);
                    } else {
                        param.width = Math.round(width / rateHeight);
                        param.height = maxHeight;
                    }
                }

                param.left = Math.round((maxWidth - param.width) / 2);
                param.top = Math.round((maxHeight - param.height) / 2);
                return param;
            },
            filelistAdd:function(el){ //添加详情图片数量
              var $dspic=$(".dspic"),
                  $el=$(el);
                  if($el.index()==$dspic.length-1&&this.fileNum<20){
                    this.fileNum++;
                  }
             
            }
           
        }

    }


</script>
<style lang="sass">
  .m-edtior {
    .edit {
      margin-top: -4px;
    }
    .cashtips {
      color: #333;
      .grey {
        color: #999;
      }
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
    .uploadlist {
      float: left;
      width: 880px;
    }
    .pic {
      display: inline-block;
      width: 80px;
      height: 80px;
      border: 1px solid #eee;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      margin-right: 10px;
      box-sizing: content-box;
      >img {
        width: 60px;
        height: 60px;
        display: block;
        margin: 10px;
      }
    }
    .dspic {
      .pic {
        margin-right: 0;
        width: 50px;
        height: 50px;
        >img {
          width: 40px;
          height: 40px;
          margin: 5px;
        }
      }
      float:left;
      .filebox {
        margin: 0 10px;
      }
    }
    .filebox {
      position: relative;
      font-size: 20px;
      .myfile {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
        opacity: 0;
        width: 20px;
        height: 20px;
      }
    }
    .mr-20 {
      margin-right: 10px;
    }
    .ml-20 {
      margin-left: 10px;
    }
    input[type=radio] {
      margin: 0 6px;
    }
    .errors {
      span {
        font-size: 12px;
        color: red;
        margin-left: 10px;
      }
    }
  }
</style>