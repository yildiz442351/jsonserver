# Axios

Axios ve Fetch en popüler iki veri çekme kütüphanesidir

Faydaları:
-Özelleştirilebilir
-Axios ,otomatik olarak Json verilerini işler.
-Hata ayıklama özellikleri vardır
-HTTP isteklerini (get,,post,delete,put)

Kullanımı:
-Projeye Axios kütüphanesini indirip kuruyoruz(npm i axios)
-kullanmak istediğiniz yerlerde axios import ediyoruz

Verilerin tutulacağı stateyi ayarlama
const [productList, setProductList] = useState([]);
eski metod
useEffect(()=>{
fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((productList) => console.log("2.dönen yanıt", productList.products))
.catch((error) => console.log("Veri Çekme Hatası",error));
},[]);

useEffect(() => {
axios
.get("https://dummyjson.com/products")
.then((response) => setProductList(response?.data?.products)
.catch(error)=> console.log("axiosget hatası", error));
}, []);
console.log("Ürünler State", productList);

HTTP İsteği Yapma:

-Veri Alma İsteği Yapma
-axios.get('endpoint')

-Yeni Veri Ekleme İsteği
-axios.post('endpoint',{gönderilecekVeri})

-Veri Silme isteği
-axios.post('endpoint/silinecek elemanın idsi')

-Veri Güncelleme isteği
-axios.delete('endpoint/id', güncellenecek eleman)

# Json Server

-Sahte bir API oluşturmaya yarar
-Kendi bilgisayarımızda bir API oluşturur
-Oluşturduğu API temeli bir json dosyasıdır

Faydaları:

-Prototip Oluşturma: gerçek API kullanılmadığı zamana hızlıca basit bir versiyonu
oluşturulabilir

-Frontend geliştirmede kolaylık sağlar
-kullanımı basittir

Kullanımı:

-Json serveri projeye indirip kurulur (npm i json-server)
-proje klasörü içerisine bir json dosyası oluşturulur
-json dosyası içlerinde tutmak istediğimiz yapıya göre verileri eklenir

# Sık Kullanılan Javascript Dizi Metodları

-filter: istenilen parametreye göre bir dizi döndürür (genelde silme işlemlerinde kullanılır)

-find: istenilen elemanı diziden bulur (tek manı döndürür)
-slice:istenilen elemanın yerine başka bir eleman koymak için kullanılır(dizi döndürür)
-splice: diziyi 2 ye bölmeye yarar
-findIndex: istenilen elemanın indexini bulur (eleman döndürür)
-map: dizideki tüm elemanları teker teker döndürmeye yarar