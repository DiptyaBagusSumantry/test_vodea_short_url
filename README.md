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
![iamge.png]({https://drive.google.com/file/d/1bGj61MJXg2ZIGWPOjmzXyI-OtcC8s8a5/view?usp=sharing})
## File .env
File ini digunakan untuk menyimpan data yang diperlukan oleh fungsi lain dan data yang disimpan bersifat dapat berubah ubah sesuai dengan environment pengembangan di local maupun di prodaction.
## File index.js
Fili ini digunakan untuk file main atau file yang dijalankan pertama kali ketika aplikasi akan digunakan. Didalamnya terdapat pengecekan file index.js pada folder models untuk generate table dan kolom ke database secara otomatis. File ini dijalankan menggunakan Express.Js.

