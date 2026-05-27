document.addEventListener("DOMContentLoaded", function () {
    const searchPlaceholder = document.getElementById("search-component");
    if (!searchPlaceholder) return;

    fetch("search.html")
        .then(response => response.text())
        .then(data => {
            searchPlaceholder.innerHTML = data;
            initSearch();
        });
});

function initSearch() {
    const searchBox = document.getElementById('searchBox');
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const myList = document.getElementById('myList');
    const items = myList.getElementsByTagName('a');

    // 1. فتح وإغلاق الصندوق عند الضغط على أيقونة العدسة
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // منع انتشار الحدث لكي لا يغلق فوراً
        searchBox.classList.toggle('active');
        
        if (searchBox.classList.contains('active')) {
            searchInput.focus(); // وضع مؤشر الكتابة داخل الحقل تلقائياً
        } else {
            searchInput.value = ""; // تفريغ النص عند الإغلاق
            myList.style.display = "none"; // إخفاء النتائج
        }
    });

    // 2. إغلاق البحث تلقائياً إذا ضغط المستخدم في أي مكان خارج البحث
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            searchInput.value = "";
            myList.style.display = "none";
        }
    });

    // منع إغلاق البحث عند الضغط داخل مربع الإدخال نفسه
    searchBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 3. فلترة وإظهار النتائج أثناء الكتابة
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase().trim();
        
        if (filter === "") {
            myList.style.display = "none";
            return;
        }
        
        myList.style.display = "block";
        let hasResults = false;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent || item.innerText;
            
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "block";
                hasResults = true;
            } else {
                item.style.display = "none";
            }
        }
        
        if (!hasResults) myList.style.display = "none";
    });
}
