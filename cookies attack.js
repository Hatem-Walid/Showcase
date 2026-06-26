// حل بديل للملفات المحلية (Local Files)
const payload = "eyJ1c2VyIjoiaGFja2VyIiwicnVuIjoiZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXI9J2ludmVydCgxKSc7IGFsZXJ0KCdIYWNrZWQhIENvb2tpZTogJyArIGRvY3VtZW50LmNvb2tpZSk7In0=";
const data = JSON.parse(atob(payload));
eval(data.run);