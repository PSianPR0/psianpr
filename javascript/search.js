document.addEventListener("DOMContentLoaded", function () {
    const searchPlaceholder = document.getElementById("search-component");
    if (!searchPlaceholder) return;

    fetch("/Elements/search.html")
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
    
    if (!searchBox || !searchIcon || !myList) return;
    const items = myList.getElementsByTagName('a');

    // إنشاء عنصر رسالة "لا توجد نتائج"
    let noResults = document.getElementById('noResults');
    if (!noResults) {
        noResults = document.createElement('p');
        noResults.id = 'noResults';
        noResults.className = 'no-results';
        noResults.innerText = 'لا توجد نتائج لمطابقتها';
        searchBox.appendChild(noResults);
    }

    // 💡 1. قاموس المرادفات والترجمة التلقائية للبحث (يمكنك إضافة أي كلمات هنا مستقبلاً)
    const searchDictionary = {
        "أدوبي": "adobe",
        "ادوبي": "adobe",
        "فوتوشوب": "photoshop",
        "اليستريتور": "illustrator",
        "افترافكت": "after effects",
        "افتر افكت": "after effects",
        "بريمير": "premiere",
        "كامتاسيا": "Camtasia",
        "برامج": "programs",
        "ويندوز": "windows",
        "اندرويد": "android"
    };

    // فتح وإغلاق الصندوق عند الضغط على أيقونة العدسة
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation(); 
        searchBox.classList.toggle('active');
        
        if (searchBox.classList.contains('active')) {
            searchInput.focus(); 
        } else {
            searchInput.value = ""; 
            myList.style.display = "none"; 
            noResults.style.display = "none";
        }
    });

    // إغلاق البحث تلقائياً عند الضغط في الخارج
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            searchInput.value = "";
            myList.style.display = "none";
            noResults.style.display = "none";
        }
    });

    searchBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // فلترة وإظهار النتائج أثناء الكتابة (محدثة بميزة القاموس الذكي)
    searchInput.addEventListener('keyup', function() {
        let filter = searchInput.value.toLowerCase().trim();
        
        if (filter === "") {
            myList.style.display = "none";
            noResults.style.display = "none";
            return;
        }

        // 💡 2. الكود السحري: التحقق من وجود الكلمة في قاموس المرادفات وتحويلها تلقائياً
        if (searchDictionary[filter]) {
            filter = searchDictionary[filter]; // استبدال الكلمة العربية بالإنجليزية خفيةً للبحث
        }
        
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
        
        if (hasResults) {
            myList.style.display = "block";
            noResults.style.display = "none";
        } else {
            myList.style.display = "none";
            noResults.style.display = "block";
        }
    });
}
