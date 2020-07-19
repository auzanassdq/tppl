# Cara menggunakan API Presensi

1. Buat dulu pertemuan dengan mengirim data `request body`

```
tanggal
dosen (id dosen)
matkul (id matkul)
```

2. Generate token tap in dan out dengan endpoint `/token`

3. Mahasiswa melakukan tap in dan tap out menggunakan endpoint `/kehadiran` dengan membawa `request body` token yang didapatkan

## /mahasiswa

| HTTP | Endpoint          | Keterangan                             |
| ---- | ----------------- | -------------------------------------- |
| GET  | `/mahasiswa`      | Mendapatkan semua data mahasiswa       |
| GET  | `/mahasiswa/{id}` | Mendapatkan satu mahasiswa dari id-nya |
| POST | `/mahasiswa`      | Menginput data mahasiswa               |

## /dosen

| HTTP | Endpoint      | Keterangan                         |
| ---- | ------------- | ---------------------------------- |
| GET  | `/dosen`      | Mendapatkan semua data dosen       |
| GET  | `/dosen/{id}` | Mendapatkan satu dosen dari id-nya |
| POST | `/dosen`      | Menginput data dosen               |

## /matkul

| HTTP | Endpoint       | Keterangan                          |
| ---- | -------------- | ----------------------------------- |
| GET  | `/matkul`      | Mendapatkan semua data matkul       |
| GET  | `/matkul/{id}` | Mendapatkan satu matkul dari id-nya |
| POST | `/matkul`      | Menginput data matkul               |

## /pertemuan

| HTTP | Endpoint          | Keterangan                             |
| ---- | ----------------- | -------------------------------------- |
| GET  | `/pertemuan`      | Mendapatkan semua data pertemuan       |
| GET  | `/pertemuan/{id}` | Mendapatkan satu pertemuan dari id-nya |
| POST | `/pertemuan`      | Menginput data pertemuan               |

## /token

| HTTP | Endpoint                   | Keterangan                   |
| ---- | -------------------------- | ---------------------------- |
| GET  | `/token/in/{idPertemuan}`  | Generate token untuk tap in  |
| GET  | `/token/out/{idPertemuan}` | Generate token untuk tap out |

## /kehadiran

| HTTP | Endpoint                       | Keterangan       |
| ---- | ------------------------------ | ---------------- |
| POST | `/kehadiran/in/{idMahasiswa}`  | Tap in presensi  |
| POST | `/kehadiran/out/{idMahasiswa}` | Tap out presensi |
