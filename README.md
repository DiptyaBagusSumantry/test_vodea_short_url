# Environment Folder
## Folder Config
Folder Config yang didalamnya terdapat file index.js merupakan file yang digunakan untuk mengkoneksikan dengan database mysql.

![vd3](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/07e3a502-3c36-4bd7-b6e5-69d4c8006045)
## Folder Controller
Folder Controller merupakan folder yang digunakan untuk melakukan proses data yang dilakukan secara *logic* sehingga data yang dihasilkan sesuai dengan fungsi dari setiap endpoint.
## Folder Helpers
Folder Helpers digunakan untuk bantuan dari fungsi yang diperlukan untuk fungsi bantuan pada fungsi tertentu. Pada project ini digunakan sebagai respon untuk handle error atau success. 
## Folder Models
Folder Models digunakan untuk melakukaan rancangan table dan kolom yang ada pada database. Rancangan tersebut seperti tipe data, uniq, dan validation. Setiap file yang ada pada folder models saling berelasi dengan file index.js pada foler models.
pernacnangan table dan kolom menggunakan orm sequelize.

![vd4](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/a3abfb5a-10e1-435a-870d-36b7dea46fd1)
## Folder Routes
Folder Routes digunakan untuk url RestFull API yang nantinya setiap url akan menjalankan endpoint dari folder yang ada pada controller. Setiap proses crud akan memberikan url yang sama dan berbeda pada method yang digunakan. 

![vd1](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/767ed57b-8120-40c7-9977-646918f7b26b)
## File .env
File ini digunakan untuk menyimpan data yang diperlukan oleh fungsi lain dan data yang disimpan bersifat dapat berubah ubah sesuai dengan environment pengembangan di local maupun di prodaction.
## File index.js
Fili ini digunakan untuk file main atau file yang dijalankan pertama kali ketika aplikasi akan digunakan. Didalamnya terdapat pengecekan file index.js pada folder models untuk generate table dan kolom ke database secara otomatis. File ini dijalankan menggunakan Express.Js.

## Endpoint Create Short Url 
### Code 
![vd2](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/bac95210-046c-4335-ba32-1bdbb7536e37)
Pada code diatas untuk fungsi expaired data menggunakan library moment yang mengambil tanggal waktu clinet ditambah 5 tahun dan untuk mendpatkan url shorted menggunakan library shortid untuk mendapatkan url pendek yang uniq.

### Request data with postman



