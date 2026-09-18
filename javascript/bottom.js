class CustomBottom extends HTMLElement {
    connectedCallback() {
        // جلب ملف الـ HTML المشترك من الجذر دائمًا
        fetch('/Elements/bottom.html')
            .then(response => {
                if (!response.ok) throw new Error("لم يتم العثور على الملف المشترك");
                return response.text();
            })
            .then(htmlContent => {
                this.innerHTML = htmlContent;
            })
            .catch(error => console.error("خطأ في تحميل المكون:", error));
    }
}

// تسجيل الوسم المخصص في المتصفح باسم "bottom-p"
customElements.define('bottom-p', CustomBottom);
