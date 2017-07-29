/**
 * Created by weiqiujuan on 17-7-29.
 */
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/328/';

function filterChapters(html) {
    var $ = cheerio.load(html);

    var chapters = $('.learnchapter');

   var course = [];
   chapters.each(function (item) {
       var chapter = $(this);
       var chapterTitle = chapter.find('strong').text();
       var videos = chapter.find('.videos').children('li');
       var chapterData = {
           chapterTitle: chapterTitle,
           video: []
       };
       videos.each(function (item) {
           var video = $(this).find('.studyvideo');
           var videoTitle = video.text();
           var id = video.attr('href').split('video/')[1];

           chapterData.videos.push({
               title: videoTitle,
               id: id
           })
       });
       courseData.push(chapterData);
   });
}
function printCourseInfo(courseData) {
  courseData.forEach(function (item) {
      var chapterTitle = item.chapterTitle;
      console.log(chapterTitle+'\n');
      item.video.forEach(function (video){
          console.log('   '+video.id+  video.title+ '\n')
      } )
  })
}
http.get(url,function (res) {
    var html = '';

    res.on('data',function (data) {
        html += data
    });

    res.on('end',function () {
        var courseData = filterChapters(html);

        printCourseInfo(courseData);
    }).on('error',function () {
        console.log('获取页面数据错误')
    })
});