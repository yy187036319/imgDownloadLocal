const bankCardIcon = [
  {
    bank_name: '图1',
    bank_code:
      'asd',
    url:
      'https://cxbres.oss-cn-beijing.aliyuncs.com/ACCOUNTFUND/bank_log/%E9%93%B6%E8%A1%8C%E5%9B%BE%E6%A0%87/%E6%B9%96%E5%8D%97%E7%9C%81%E5%86%9C%E6%9D%91%E4%BF%A1%E7%94%A8%E7%A4%BE/201806071426531.png',
  },
  {
    bank_name: '图2',
    bank_code:
      'zxc',
    url:
      'https://cxbres.oss-cn-beijing.aliyuncs.com/ACCOUNTFUND/bank_log/%E9%93%B6%E8%A1%8C%E5%9B%BE%E6%A0%87/%E6%97%A0%E9%94%A1%E5%86%9C%E6%9D%91%E5%95%86%E4%B8%9A%E9%93%B6%E8%A1%8C/20180607142716941.png',
  }
]
var fs = require('fs');
var async = require('async');
var request = require('request');

var downloadPic = function(src, dest){
  request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
    console.log('pic saved!')
  })
}

async.mapSeries(bankCardIcon,function(item, callback){
  setTimeout(function(){
    downloadPic(item.url, './image/'+ (item.bank_code +'.png'));
    callback(null, item);
  },400);
}, function(err, results){});