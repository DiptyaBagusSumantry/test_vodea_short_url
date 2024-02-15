# Environment Folder
## Folder Config
Folder Config yang didalamnya terdapat file index.js merupakan file yang digunakan untuk mengkoneksikan dengan database mysql.
## Folder Controller
Folder Controller merupakan folder yang digunakan untuk melakukan proses data yang dilakukan secara *logic* sehingga data yang dihasilkan sesuai dengan fungsi dari setiap endpoint.
## Folder Helpers
Folder Helpers digunakan untuk bantuan dari fungsi yang diperlukan untuk fungsi bantuan pada fungsi tertentu. Pada project ini digunakan sebagai respon untuk handle error atau success. 
## Folder Models
Folder Models digunakan untuk melakukaan rancangan table dan kolom yang ada pada database. Rancangan tersebut seperti tipe data, uniq, dan validation. Setiap file yang ada pada folder models saling berelasi dengan file index.js pada foler models.
## Folder Routes
Folder Routes digunakan untuk url RestFull API yang nantinya setiap url akan menjalankan endpoint dari folder yang ada pada controller. Setiap proses crud akan memberikan url yang sama dan berbeda pada method yang digunakan. 
![iamge.png]({https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.idntimes.com%2Fcontent-images%2Fpost%2F20190729%2F4c5c01201fba5818a182bba9402ce673-fe427165915ccd9708b0b1d1704330b5.jpg&tbnid=7V9HCJrKlQekmM&vet=12ahUKEwiUtJbHrqyEAxWeTmwGHTJZCNkQMygDegQIARBT..i&imgrefurl=https%3A%2F%2Fwww.idntimes.com%2Flife%2Fdiy%2Fmaria-cindy-1%2Fdiy-pajang-foto-di-kamar&docid=cT4wIbo-twlNKM&w=564&h=869&q=tempat%20menempelkan%20gambar&ved=2ahUKEwiUtJbHrqyEAxWeTmwGHTJZCNkQMygDegQIARBT})
## File .env
File ini digunakan untuk menyimpan data yang diperlukan oleh fungsi lain dan data yang disimpan bersifat dapat berubah ubah sesuai dengan environment pengembangan di local maupun di prodaction.
## File index.js
Fili ini digunakan untuk file main atau file yang dijalankan pertama kali ketika aplikasi akan digunakan. Didalamnya terdapat pengecekan file index.js pada folder models untuk generate table dan kolom ke database secara otomatis. File ini dijalankan menggunakan Express.Js.

