function purchaseBook(
  judulBuku,
  deskripsiBuku,
  kesediaanBuku,
  hargaBuku,
  diskonBuku,
  tax,
) {
  const nilaiDiskon = 100;
  const pajak = 0.01;

  let totalDiskon = (hargaBuku + diskonBuku * nilaiDiskon) - hargaBuku;

  let hargaSetelahDiskon = hargaBuku - totalDiskon;

  let totalPajak = hargaSetelahDiskon * (tax * pajak);

  let priceAfterTax = hargaSetelahDiskon + totalPajak;

  console.log("Judul Buku: ", judulBuku);
  console.log("deskripsi buku : ", deskripsiBuku);
  console.log("Harga : ", hargaBuku);
  console.log("Diskon Buku: ", diskonBuku);
  console.log("Pajak: ", tax);
  console.log("Total Diskon: ", totalDiskon);
  console.log("Harga Setelah Diskon: ", hargaSetelahDiskon);
  console.log("Pajak Total: ", totalPajak);
  console.log("Total yang dibayarkan: ", priceAfterTax);
  console.log("Kesediaan: ", kesediaanBuku,);

}

purchaseBook('cara bermain dota', 'mengajarkan bagaimana cara bermain dota dengan baik dan benar', true, 10000, 20, 10)
