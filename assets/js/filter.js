// --- 这是净化过的代码，请复制这个版本 ---
$(document).ready(function() {
    // 监听所有class为 .filter-btn 的按钮的点击事件
    $('.filter-btn').on('click', function(e) {
        // 阻止按钮的默认跳转行为
        e.preventDefault();

        // 获取被点击按钮的 data-filter 属性值
        var filterValue = $(this).attr('data-filter');

        // --- 更新按钮的激活状态 ---
        // 移除所有按钮的 'active' class
        $('.filter-btn').removeClass('active');
        // 给被点击的按钮添加 'active' class
        $(this).addClass('active');

        // --- 执行筛选逻辑 ---
        if (filterValue === 'all') {
            // 如果点击的是 "All"，则显示所有出版物
            $('.pub-item').show(200);
        } else {
            // 否则，先隐藏所有出版物
            $('.pub-item').hide(200);
            // 然后只显示那些class中包含 filterValue 的出版物
            $('.pub-item.' + filterValue).show(200);
        }
    });
});
