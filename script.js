const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {    /* 监听器侦查点击动作，然后 */
        removeActiveClasses()        /* 移除之前的active类 */
        panel.classList.add('active')     /* 添加新active类 */
    })
})

// 定义移除active的函数
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}