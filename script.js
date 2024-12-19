let userName = prompt("как тебя зовут?");

const letter = prompt("Введите букву, которую хотите проверить:");

if (userName.includes(letter)) {
    alert("Togri: ismni yozadi ${letter} harf bor");
} else {
    alert(`Notogri: ismingizda ${letter} harf yoq`);
}