import React, { useState } from "react";

export default function About() {
  const isi = [
    { kiri: "Nama", kanan: "Muhammad Fajar" },
    { kiri: "Email", kanan: "mfjr48@gmail.com" },
    { kiri: "Sistem Operasi yang digunakan", kanan: "Linux Mint 19.2" },
    { kiri: "Akun Github", kanan: "github.com/mfjrid" },
    { kiri: "Akun Telegram", kanan: "@Mfjrid - 081932106764" },
  ];
  return (
    <div>
      <section>
        <h1 style={{ textAlign: "center" }}>
          Data Peserta Sanbercode Bootcamp Reactjs
        </h1>
        <ul>
          {isi.map((isi) => {
            return (
              <li>
                <b>{isi.kiri} :</b> {isi.kanan}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
