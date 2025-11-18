// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // Kaydırma (Carousel) konteynerini seçer
    const carousel = document.querySelector('.carousel-container');

    // Her bir slaydın genişliğini (viewport genişliği) almamız gerekiyor.
    // CSS'te slayt genişliğini 100vw (viewport width) olarak ayarladığımız için
    // doğru kaydırma miktarı viewport genişliğidir.
    const slideWidth = window.innerWidth; // Doğru kaydırma miktarını alır

    // Klavyeden bir tuşa basıldığında çalışır
    document.addEventListener('keydown', (e) => {
        
        // Ok tuşlarıyla kaydırma yapmadan önce varsayılan davranışı engeller (bazı tarayıcılar sayfanın dikey kaydırmasını yapabilir)
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault(); 
        }

        // Sağ ok tuşu (ArrowRight) basıldığında
        if (e.key === 'ArrowRight') {
            // Konteyneri bir slayt genişliği kadar sağa kaydırır
            carousel.scrollLeft += slideWidth;
        } 
        // Sol ok tuşu (ArrowLeft) basıldığında
        else if (e.key === 'ArrowLeft') {
            // Konteyneri bir slayt genişliği kadar sola kaydırır
            carousel.scrollLeft -= slideWidth;
        }
    });
});