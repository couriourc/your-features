import html2canvas from "html2canvas";
// 先抄个作业
// 获取像素比
function DPR() {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
    }
    return 1;
}
// 将传入值转为 10 进制整数
function parseValue(value) {
    return parseInt(value, 10);
}
// 绘制 canvas
export function drawCanvas(selector) {
    // 获取想要转换的 DOM 节点
    var dom = document.querySelector(selector);
    var box = window.getComputedStyle(dom);
    // DOM 节点计算后宽高
    var width = parseValue(box.width);
    var height = parseValue(box.height);
    // 获取像素比
    var scaleBy = DPR();
    // 创建自定义 canvas 元素
    var canvas = document.createElement('canvas');

    // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
    canvas.width = width * scaleBy + 1;
    canvas.height = height * scaleBy;
    // 设定 canvas css宽高为 DOM 节点宽高
    canvas.style.width = `${width * scaleBy + 1}px`;
    canvas.style.height = `${height * scaleBy}px`;

    // 背景透明，这里设置透明其实是无效的，需要在 options 里面单独配置
    canvas.style.backgroundColor = 'rgba(0,0,0,0)';
    // 获取画笔
    var context = canvas.getContext('2d');
    context!.fillStyle = 'rgba(0,0,0,0)';

    // 将所有绘制内容放大屏幕倍率
    // 因为UI提供了海报图的不同倍率图片，这段代码就注释了
    // context.scale(scaleBy, scaleBy);

    // 将自定义 canvas 作为配置项传入，开始绘制
    return html2canvas(dom, {
        canvas,
        allowTaint: false,
        // canvas,
        // 这里是生成 png 是否为透明的关键，
        // 不然 html2canvas 会自动将背景设为白色，生成的 png 图片就会在透明的位置自带白色
        backgroundColor: null,
    });
}
// 作业抄完
