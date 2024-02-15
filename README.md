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
Fili ini digunakan untuk file main atau file yang dijalankan pertama kali ketika aplikasi akan digunakan. Didalamnya terdapat pengecekan file index.js pada folder models untuk generate table dan kolom ke database secara otomatis. File ini dijalankan menggunakan Express.Js. Untuk menghindari spam menggunakan library express-rate-limit setiap menit setiap ip dapat melakukan request sebanyak 3x.

![vd12](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/a085385a-86a6-49d5-b250-73e8e66d2b07)

## Endpoint Create Short Url 
### Code 
![vd2](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/bac95210-046c-4335-ba32-1bdbb7536e37)
Pada code diatas untuk fungsi expaired data menggunakan library moment yang mengambil tanggal waktu clinet ditambah 5 tahun dan untuk mendpatkan url shorted menggunakan library shortid untuk mendapatkan url pendek yang uniq.

### Request data with postman
![vd5](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/3e687d1f-ba5b-492f-8430-712e1d39011a)

### create short url with postman
![vod6](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/66ce5e98-2e43-43b4-ad2e-b1eb0a8c9799)

## Endpoint Get short Url
### Code 
![vd7](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/a65996a3-dc69-4c26-aacf-1f2cff3d971b)

### Request data Get sort/:id
![vd8](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/b78467fa-083e-443d-9a54-02d2505e706c)

### Response data akan redirect ke long_url
![vd9](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/05e49d22-a45b-43d5-897e-ea065ef180ea)

## Gambar Table Short
![vd10](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/28295773-29d6-46ab-bd80-75f4895f2ceb)

## Testing Validasi
### Data null atau kosong

![vd_empty](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/81e86b99-abd1-4560-9a43-084092168ef8)
### Data bukan url

![vd_mustUrl](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/64825cd7-73a2-4e40-9aed-48f5f094f481)
### link sudah expaired

![vd_jika kode expaired](https://github.com/DiptyaBagusSumantry/test_vodea_short_url/assets/112381720/b76c511d-7120-47f5-b4a6-141e758d0665)




