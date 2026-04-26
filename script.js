const recipes = [
    {
        id: 1,
        cat: "main",
        imgX: "0%", imgY: "0%",
        vi: {
            title: "Thịt xá xíu",
            catName: "Món chính",
            ingredients: ["Thịt: 1 kg", "Nước tương Nhật: 200 mL", "Gừng: 25 g", "Tỏi: 10 g", "Mirin: 100 mL", "Đường mía: 55 g", "Rượu: 60 mL", "Nước: khoảng 200 mL (đổ nước sau, lúc nấu ngập trên thịt 8 mm)"],
            instructions: ["Ngâm thịt và gia vị trong 1 ngày.", "Nấu nồi áp suất lửa vừa, thời gian 27 phút (từ lúc hơi phun lên để 20 phút sau tắt lửa).", "Để thịt trong nồi áp suất 30 phút, sau đó mở nắp cho thịt ra chảo chống dính với nước sốt thịt.", "Nấu thêm 4 phút, lật mặt rồi nấu thêm 4 phút mặt còn lại (lửa lớn).", "Cách làm nước sốt chan cơm: múc 3/4 nước sốt thịt vào nồi nhỏ, cho vào 18 g đường vàng, nấu 3 phút."]
        },
        en: {
            title: "Char Siu Pork",
            catName: "Main",
            ingredients: ["Pork: 1 kg", "Japanese Soy Sauce: 200 mL", "Ginger: 25 g", "Garlic: 10 g", "Mirin: 100 mL", "Cane Sugar: 55 g", "Cooking Wine: 60 mL", "Water: ~200 mL (add until 8mm above meat)"],
            instructions: ["Marinate pork and spices for 1 day.", "Cook in a pressure cooker on medium heat for 27 mins (turn off heat 20 mins after steam releases).", "Leave in the cooker for 30 mins, then open and transfer the meat to a non-stick pan with its sauce.", "Cook on high heat for 4 mins on each side.", "Rice sauce: take 3/4 of the meat sauce, add 18 g brown sugar, and cook for 3 mins."]
        },
        ja: {
            title: "チャーシュー",
            catName: "メイン",
            ingredients: ["豚肉: 1 kg", "日本の醤油: 200 mL", "生姜: 25 g", "にんにく: 10 g", "みりん: 100 mL", "きび砂糖: 55 g", "料理酒: 60 mL", "水: 約 200 mL (肉の8mm上まで水を加える)"],
            instructions: ["豚肉と調味料を1日漬け込む。", "圧力鍋の中火で27分煮る（蒸気が出たら20分後に火を止める）。", "鍋の中で30分休ませてから蓋を開け、タレと一緒にフライパンに移す。", "強火で片面4分ずつ焼く。", "ご飯用タレ: 肉のタレ3/4に黒砂糖18gを加え、3分煮詰める。"]
        }
    },
    {
        id: 2,
        cat: "main",
        imgX: "25%", imgY: "0%",
        vi: {
            title: "Món lòng heo cho ba",
            catName: "Món chính",
            ingredients: ["Lòng heo: 300 g", "Cà rốt: 1/2 củ", "Củ cải trắng: 1/2 củ", "Konnyaku (khoai nưa): 1 củ/miếng", "Hành tây: 1 củ", "Gừng: 15 g", "Tỏi xay: 6 g", "Nước tương nhạt: 50 g", "Dashi: 10 g", "Miso: 40 g", "Sữa tươi: 40 g", "Nước: 300 mL", "Chút hành, ớt"],
            instructions: ["Luộc lòng với hành, gừng, sau đó rửa sạch sẽ.", "Cách sắp xếp: bỏ rau củ vào 1/2 nồi trước rồi xếp phần lòng lên trên cùng.", "Cho gừng, chút ớt, tỏi xay, nước tương nhạt, dashi, miso, sữa tươi và nước vào.", "Hầm sôi rồi để 10 phút, tắt lửa."]
        },
        en: {
            title: "Pork Intestine Stew",
            catName: "Main",
            ingredients: ["Pork Intestine: 300 g", "Carrot: 1/2", "Radish: 1/2", "Konnyaku: 1", "Onion: 1", "Ginger: 15 g", "Minced Garlic: 6 g", "Light Soy Sauce: 50 g", "Dashi: 10 g", "Miso: 40 g", "Fresh Milk: 40 g", "Water: 300 mL", "Scallion, Chili"],
            instructions: ["Boil intestines with scallion and ginger, then wash clean.", "Arrangement: place vegetables in the bottom half of the pot, then put intestines on top.", "Add ginger, chili, garlic, light soy sauce, dashi, miso, milk, and water.", "Bring to a boil, simmer for 10 mins, then turn off heat."]
        },
        ja: {
            title: "豚モツの煮込み",
            catName: "メイン",
            ingredients: ["豚モツ: 300 g", "人参: 1/2本", "大根: 1/2本", "こんにゃく: 1個", "玉ねぎ: 1個", "生姜: 15 g", "おろしにんにく: 6 g", "薄口醤油: 50 g", "だしの素: 10 g", "味噌: 40 g", "牛乳: 40 g", "水: 300 mL", "ネギ、唐辛子"],
            instructions: ["ネギと生姜でモツを茹で、きれいに洗う。", "並べ方: 鍋の下半分に野菜を敷き、その上にモツを乗せる。", "生姜、唐辛子、にんにく、薄口醤油、だしの素、味噌、牛乳、水を加える。", "沸騰させて10分煮込み、火を止める。"]
        }
    },
    {
        id: 3,
        cat: "main",
        imgX: "50%", imgY: "0%",
        vi: {
            title: "Xôi nếp Nhật Việt",
            catName: "Món chính",
            ingredients: ["Cho nhà ăn: Nếp 3.5 lon, đậu 0.5 lon, gạo 1 lon, mức nước 4.25", "Cho khách: Nếp 4 lon, đậu 0.5 lon, gạo 0.5 lon, mức nước 4.1"],
            instructions: ["Vo gạo, đậu và nếp cho sạch.", "Canh mức nước tương ứng như trên.", "Nấu bằng nồi cơm điện."]
        },
        en: {
            title: "Viet-Japanese Sticky Rice",
            catName: "Main",
            ingredients: ["For Family: Sticky rice 3.5 cups, beans 0.5 cup, rice 1 cup, water level 4.25", "For Guests: Sticky rice 4 cups, beans 0.5 cup, rice 0.5 cup, water level 4.1"],
            instructions: ["Wash rice, beans, and sticky rice.", "Add the corresponding water level.", "Cook in a rice cooker."]
        },
        ja: {
            title: "日越おこわ",
            catName: "メイン",
            ingredients: ["家庭用: もち米 3.5合、豆 0.5合、米 1合、水 4.25の線", "来客用: もち米 4合、豆 0.5合、米 0.5合、水 4.1の線"],
            instructions: ["米、豆、もち米を研ぐ。", "規定量の水を入れる。", "炊飯器で炊く。"]
        }
    },
    {
        id: 4,
        cat: "snack",
        imgX: "75%", imgY: "0%",
        vi: {
            title: "Kẹo hạt mè đen",
            catName: "Ăn vặt",
            ingredients: ["Các loại hạt: 500 g (hạt bí, đậu phộng, óc chó, hạnh nhân)", "Mật ong: 80 g", "Đường: 70 g", "Muối: 20 g", "Mè đen: 1.5 muỗng", "Mè vàng: 0.5 muỗng", "Gừng: 30 g", "Cánh vàng: 1.2 nắp (băm nhuyễn cho vào sau)"],
            instructions: ["Thắng đường và mật ong với lửa nhỏ khoảng 10 phút.", "Khi kẹo lại thì cho hạt vào trộn thêm 2 phút.", "Đổ ra khuôn có lót giấy nướng bánh.", "Khi hơi nguội thì cắt ra ngay (để cứng lại sẽ khó cắt).", "Cắt xong bỏ tủ lạnh để kẹo cứng hơn."]
        },
        en: {
            title: "Black Sesame Candy",
            catName: "Snack",
            ingredients: ["Mixed nuts/seeds: 500 g", "Honey: 80 g", "Sugar: 70 g", "Salt: 20 g", "Black sesame: 1.5 tbsp", "White sesame: 0.5 tbsp", "Ginger: 30 g", "Yellow wings (flavoring): 1.2 caps (minced, add later)"],
            instructions: ["Caramelize sugar and honey on low heat for 10 mins.", "When thickened, add nuts and mix for 2 mins.", "Pour into a mold lined with baking paper.", "Cut while slightly warm (hard to cut when fully hardened).", "After cutting, refrigerate to harden further."]
        },
        ja: {
            title: "黒ごまキャンディー",
            catName: "おやつ",
            ingredients: ["ミックスナッツ/種: 500 g", "はちみつ: 80 g", "砂糖: 70 g", "塩: 20 g", "黒ごま: 大さじ1.5", "白ごま: 大さじ0.5", "生姜: 30 g", "香料: キャップ1.2杯（後で加える）"],
            instructions: ["はちみつと砂糖を弱火で10分煮詰める。", "とろみがついたらナッツを加え、2分混ぜる。", "クッキングシートを敷いた型に流し込む。", "少し温かいうちに切る（固まると切りにくい）。", "切った後、冷蔵庫で冷やし固める。"]
        }
    },
    {
        id: 5,
        cat: "dessert",
        imgX: "100%", imgY: "0%",
        vi: {
            title: "Bánh kem cacao",
            catName: "Bánh",
            ingredients: [
                "Khuôn đen to (khách): Bột 220 g, Bơ 95 g, Sữa tươi 150 g, Cacao 14 g, Đường 90 g, Trứng 115 g (2 trái M)",
                "Nhà ăn: Bột 202 g, Sữa 165 g, Cacao 14 g, Đường 55 g, Bơ 50 g, Trứng 105 g",
                "Khuôn thường (khách): Bột 202 g, Sữa 135 g, Cacao 14 g, Đường 65 g, Bơ 70 g, Trứng 105 g",
                "Kem: 1 hộp kem, Cacao 14 g"
            ],
            instructions: ["Trộn đều các nguyên liệu làm cốt bánh tùy theo kích cỡ khuôn.", "Nướng ở 180 độ trong 35 phút.", "Tầng trên cùng phủ kem rồi rắc bột cacao lên trên."]
        },
        en: {
            title: "Cocoa Cake",
            catName: "Dessert",
            ingredients: [
                "Large black mold (Guests): Flour 220g, Butter 95g, Milk 150g, Cocoa 14g, Sugar 90g, Eggs 115g",
                "Family: Flour 202g, Milk 165g, Cocoa 14g, Sugar 55g, Butter 50g, Eggs 105g",
                "Regular mold (Guests): Flour 202g, Milk 135g, Cocoa 14g, Sugar 65g, Butter 70g, Eggs 105g",
                "Cream: 1 box of cream, Cocoa 14g"
            ],
            instructions: ["Mix cake ingredients according to the mold size.", "Bake at 180°C for 35 minutes.", "Cover the top with cream and dust with cocoa powder."]
        },
        ja: {
            title: "ココアケーキ",
            catName: "デザート",
            ingredients: [
                "大きな黒い型（来客用）: 小麦粉 220g、バター 95g、牛乳 150g、ココア 14g、砂糖 90g、卵 115g",
                "家庭用: 小麦粉 202g、牛乳 165g、ココア 14g、砂糖 55g、バター 50g、卵 105g",
                "普通の型（来客用）: 小麦粉 202g、牛乳 135g、ココア 14g、砂糖 65g、バター 70g、卵 105g",
                "クリーム: 生クリーム1箱、ココア 14g"
            ],
            instructions: ["型のサイズに合わせて生地の材料を混ぜる。", "180度で35分焼く。", "上にクリームを塗り、ココアパウダーを振りかける。"]
        }
    },
    {
        id: 6,
        cat: "main",
        imgX: "0%", imgY: "50%",
        vi: {
            title: "Bánh xèo, khọt bột Nhật",
            catName: "Món chính",
            ingredients: ["Bột mì hình tôm: 130 g", "Bột gạo Nhật: 275 g", "Cốt dừa: 100 g", "Nước lạnh: 850 mL", "Trứng: 1 quả (59 g)", "Dashi: 8 g", "Dầu ăn: 1 muỗng bự", "Nghệ: 3 g", "Hành lá"],
            instructions: ["Trộn tất cả bột, nước, cốt dừa, trứng, dashi và nghệ cho đều.", "Cho hành lá cắt nhỏ vào hỗn hợp.", "Cho dầu lên chảo nóng, đổ bột làm bánh xèo hoặc bánh khọt."]
        },
        en: {
            title: "Banh Xeo / Banh Khot (Japanese Flour)",
            catName: "Main",
            ingredients: ["Shrimp-branded wheat flour: 130 g", "Japanese rice flour: 275 g", "Coconut cream: 100 g", "Cold water: 850 mL", "Egg: 1 (59 g)", "Dashi: 8 g", "Oil: 1 tbsp", "Turmeric: 3 g", "Scallions"],
            instructions: ["Mix flours, water, coconut cream, egg, dashi, and turmeric.", "Add chopped scallions.", "Fry thin crepes (Banh Xeo) or mini pancakes (Banh Khot) in a hot oiled pan."]
        },
        ja: {
            title: "バインセオ・バインコット",
            catName: "メイン",
            ingredients: ["エビ印小麦粉: 130 g", "日本の米粉: 275 g", "ココナッツミルク: 100 g", "冷水: 850 mL", "卵: 1個 (59 g)", "だしの素: 8 g", "油: 大さじ1", "ターメリック: 3 g", "ネギ"],
            instructions: ["粉類、水、ココナッツミルク、卵、だしの素、ターメリックを混ぜる。", "刻んだネギを加える。", "熱したフライパンに油を引き、生地を流して焼く。"]
        }
    },
    {
        id: 7,
        cat: "dessert",
        imgX: "25%", imgY: "50%",
        vi: {
            title: "Taiyaki (Bánh hình cá đậu đỏ)",
            catName: "Bánh",
            ingredients: ["Bột bánh kem: 300 g", "Nước: 300 mL", "Bột sữa béo: 25 g", "Trứng: size S", "Nhân đậu đỏ"],
            instructions: ["Trộn bột, nước, bột sữa và trứng thành hỗn hợp lỏng mượt.", "Làm nóng khuôn hình cá.", "Đổ bột, cho nhân đậu đỏ vào giữa, đổ thêm bột lấp đầy và nướng chín."]
        },
        en: {
            title: "Taiyaki (Red Bean Fish Cake)",
            catName: "Dessert",
            ingredients: ["Cake flour: 300 g", "Water: 300 mL", "Fat milk powder: 25 g", "Egg: size S", "Red bean paste"],
            instructions: ["Mix flour, water, milk powder, and egg until smooth.", "Heat the fish mold.", "Pour batter, add red bean paste, cover with more batter and bake."]
        },
        ja: {
            title: "たいやき",
            catName: "デザート",
            ingredients: ["ケーキ用小麦粉: 300 g", "水: 300 mL", "粉ミルク: 25 g", "卵: Sサイズ", "あんこ"],
            instructions: ["粉、水、粉ミルク、卵を滑らかになるまで混ぜる。", "たいやき器を温める。", "生地を流し、あんこを入れ、さらに生地を被せて焼く。"]
        }
    },
    {
        id: 8,
        cat: "main",
        imgX: "50%", imgY: "50%",
        vi: {
            title: "Bánh ướt bột Nhật (4 người ăn)",
            catName: "Món chính",
            ingredients: ["Bột gạo: 345 g", "Bột năng: 170 g", "Nước: 1170 mL", "Muối: một chút", "Dầu ăn: một chút"],
            instructions: ["Trộn đều bột gạo và bột năng với nước.", "Thêm chút muối và dầu ăn vào khuấy đều.", "Tráng bánh mỏng trên nồi hơi nước hoặc chảo chống dính."]
        },
        en: {
            title: "Steamed Rice Rolls (Banh Uot)",
            catName: "Main",
            ingredients: ["Rice flour: 345 g", "Tapioca starch: 170 g", "Water: 1170 mL", "Salt: a pinch", "Oil: a little"],
            instructions: ["Mix rice flour and tapioca starch with water.", "Add a pinch of salt and oil.", "Steam thin layers of batter or cook in a non-stick pan."]
        },
        ja: {
            title: "バインウオット (蒸し春巻き)",
            catName: "メイン",
            ingredients: ["米粉: 345 g", "タピオカ粉: 170 g", "水: 1170 mL", "塩: 少々", "油: 少々"],
            instructions: ["米粉、タピオカ粉、水を混ぜる。", "塩と油を少し加える。", "蒸し器やフライパンで薄く生地を焼く。"]
        }
    },
    {
        id: 9,
        cat: "sauce",
        imgX: "75%", imgY: "50%",
        vi: {
            title: "Nước mắm làm gỏi",
            catName: "Nước chấm",
            ingredients: ["Chanh: 50 mL", "Đường: 200 mL", "Muối: 20 g", "Giấm: 120 mL", "Nước mắm: 70 mL"],
            instructions: ["Khuấy tan đường với muối, giấm, chanh và nước mắm.", "Dùng để trộn chung với các loại gỏi."]
        },
        en: {
            title: "Fish Sauce for Salad",
            catName: "Sauce",
            ingredients: ["Lemon juice: 50 mL", "Sugar: 200 mL", "Salt: 20 g", "Vinegar: 120 mL", "Fish sauce: 70 mL"],
            instructions: ["Stir sugar and salt until dissolved in lemon, vinegar, and fish sauce.", "Use as dressing for salads."]
        },
        ja: {
            title: "サラダ用ヌクマム",
            catName: "ソース",
            ingredients: ["レモン汁: 50 mL", "砂糖: 200 mL", "塩: 20 g", "酢: 120 mL", "ヌクマム: 70 mL"],
            instructions: ["砂糖と塩を液体に溶かす。", "サラダのドレッシングとして使う。"]
        }
    },
    {
        id: 10,
        cat: "sauce",
        imgX: "100%", imgY: "50%",
        vi: {
            title: "Nước mắm nhà thường ăn",
            catName: "Nước chấm",
            ingredients: ["Đường: 1.5 muỗng", "Chanh: 1.5 muỗng", "Nước mắm: 2 muỗng", "Nước: 3 muỗng", "Tỏi, ớt băm"],
            instructions: ["Pha đường với nước và chanh cho tan.", "Thêm nước mắm vào nếm vừa miệng.", "Cho tỏi ớt băm vào cuối cùng để nổi lên mặt."]
        },
        en: {
            title: "Everyday Fish Sauce",
            catName: "Sauce",
            ingredients: ["Sugar: 1.5 tbsp", "Lemon: 1.5 tbsp", "Fish sauce: 2 tbsp", "Water: 3 tbsp", "Minced garlic, chili"],
            instructions: ["Dissolve sugar in water and lemon juice.", "Add fish sauce.", "Add minced garlic and chili at the end so they float."]
        },
        ja: {
            title: "普段使いのヌクマム",
            catName: "ソース",
            ingredients: ["砂糖: 大さじ1.5", "レモン汁: 大さじ1.5", "ヌクマム: 大さじ2", "水: 大さじ3", "みじん切りにんにく、唐辛子"],
            instructions: ["砂糖を水とレモン汁で溶かす。", "ヌクマムを加える。", "最後ににんにくと唐辛子を加える。"]
        }
    },
    {
        id: 11,
        cat: "sauce",
        imgX: "0%", imgY: "100%",
        vi: {
            title: "Sốt miso chấm bánh tráng cuốn",
            catName: "Nước chấm",
            ingredients: ["Miso giảm muối 20%: 100 g", "Bơ đậu phộng không hạt: 80 g", "Đường: 24 g", "Tương ớt: 15 g", "Muối: 4 g", "Nước: 280 g", "Tỏi: 6 tép"],
            instructions: ["Phi 6 tép tỏi lửa nhỏ.", "Cho tất cả nguyên liệu đã trộn vào nấu khoảng 6 phút.", "Khi sôi 2 phút thì tắt lửa."]
        },
        en: {
            title: "Miso Sauce for Rice Paper Rolls",
            catName: "Sauce",
            ingredients: ["Reduced sodium Miso: 100 g", "Creamy peanut butter: 80 g", "Sugar: 24 g", "Chili sauce: 15 g", "Salt: 4 g", "Water: 280 g", "Garlic: 6 cloves"],
            instructions: ["Fry minced garlic on low heat.", "Add all mixed ingredients and cook for 6 mins.", "Boil for 2 mins, then turn off heat."]
        },
        ja: {
            title: "生春巻き用味噌ソース",
            catName: "ソース",
            ingredients: ["減塩味噌: 100 g", "ピーナッツバター: 80 g", "砂糖: 24 g", "チリソース: 15 g", "塩: 4 g", "水: 280 g", "にんにく: 6片"],
            instructions: ["にんにくを弱火で炒める。", "混ぜ合わせた材料をすべて加え、約6分煮る。", "2分間沸騰させたら火を止める。"]
        }
    },
    {
        id: 12,
        cat: "dessert",
        imgX: "25%", imgY: "100%",
        vi: {
            title: "Rau câu Việt Nam (Kanten)",
            catName: "Bánh",
            ingredients: [
                "Màu hồng: 4 g kanten, 400 mL nước, 6 giọt kanten màu, đường 55 g, vani",
                "Sữa dừa: 600 g sữa tươi, 200 g sữa đặc, 8 g kanten, 200 g cốt dừa, vani (không bỏ đường)",
                "Cà phê: 600 g cốt dừa, 200 g nước, 8 g kanten, 4 bịch cafe G7, 130 g đường",
                "Xanh lá dứa: 800 g nước, 8 g kanten, 130 g đường, màu lá dứa tuỳ ý"
            ],
            instructions: ["Nấu riêng từng vị rau câu trên bếp.", "Đổ một lớp chờ se mặt rồi đổ tiếp lớp khác để tạo tầng đẹp mắt."]
        },
        en: {
            title: "Vietnamese Agar Jelly (Kanten)",
            catName: "Dessert",
            ingredients: [
                "Pink layer: 4g powder, 400mL water, 6 drops kanten, 55g sugar, vanilla",
                "Coconut Milk: 600g milk, 200g condensed milk, 8g kanten, 200g coconut cream, vanilla",
                "Coffee: 600g coconut cream, 200g water, 8g kanten, 4 packs G7 coffee, 130g sugar",
                "Pandan: 800g water, 8g kanten, 130g sugar, pandan extract"
            ],
            instructions: ["Cook each flavor separately.", "Pour one layer, let it set slightly before pouring the next to create layers."]
        },
        ja: {
            title: "かんてん (ベトナム風)",
            catName: "デザート",
            ingredients: [
                "ピンク: 粉末4g、水400mL、寒天液6滴、砂糖55g、バニラ",
                "ココナッツミルク: 牛乳600g、練乳200g、寒天8g、ココナッツミルク200g、バニラ",
                "コーヒー: ココナッツミルク600g、水200g、寒天8g、G7コーヒー4袋、砂糖130g",
                "パンダン: 水800g、寒天8g、砂糖130g、パンダンエッセンス"
            ],
            instructions: ["各フレーバーを別々に煮溶かす。", "1層を流し込み、表面が少し固まったら次の層を流し込む。"]
        }
    },
    {
        id: 13,
        cat: "main",
        imgX: "50%", imgY: "100%",
        vi: {
            title: "Bánh lọc",
            catName: "Món chính",
            ingredients: ["Tỉ lệ: 1 Bột + 2.2 Nước", "Nhân tôm thịt"],
            instructions: ["Pha bột và nước theo tỉ lệ chuẩn (1 bột : 2.2 nước).", "Giáo bột trên bếp cho đặc lại.", "Gói bánh với lá chuối và nhân tôm thịt, sau đó hấp chín."]
        },
        en: {
            title: "Tapioca Dumplings (Banh Loc)",
            catName: "Main",
            ingredients: ["Ratio: 1 Tapioca Starch + 2.2 Water", "Shrimp & Pork filling"],
            instructions: ["Mix starch and water.", "Cook mixture on stove until slightly thickened.", "Wrap in banana leaves with filling and steam."]
        },
        ja: {
            title: "バインロック",
            catName: "メイン",
            ingredients: ["比率: タピオカ粉 1 + 水 2.2", "エビと豚肉の餡"],
            instructions: ["粉と水を混ぜる。", "火にかけて少しとろみをつける。", "バナナの葉で餡と一緒に包み、蒸す。"]
        }
    },
    {
        id: 14,
        cat: "main",
        imgX: "75%", imgY: "100%",
        vi: {
            title: "Bánh xèo Nhật (Okonomiyaki)",
            catName: "Món chính",
            ingredients: ["Bột hình tôm chiên Nhật: 300 g", "Nước: 400 mL", "Trứng gà: 1 quả", "Dashi: 6 g", "Dầu ăn", "Bắp cải cắt mỏng, tép nhỏ, thịt, mochi cắt lát mỏng"],
            instructions: ["Trộn bột, nước, trứng, dashi.", "Cho dầu lên chảo nóng, đổ một ít bột lên, xếp bắp cải, mochi hay thịt lên trên.", "Bánh chín lấy ra đĩa, phủ rong biển, sốt okonomiyaki, cá bào, mayonnaise."]
        },
        en: {
            title: "Okonomiyaki",
            catName: "Main",
            ingredients: ["Japanese Okonomiyaki flour: 300 g", "Water: 400 mL", "Egg: 1", "Dashi: 6 g", "Oil", "Shredded cabbage, tiny shrimp, pork, thinly sliced mochi"],
            instructions: ["Mix flour, water, egg, dashi.", "Pour batter on hot oiled pan, top with cabbage, mochi, pork.", "Once cooked, top with seaweed, okonomiyaki sauce, bonito flakes, mayo."]
        },
        ja: {
            title: "おこのみやき",
            catName: "メイン",
            ingredients: ["お好み焼き粉: 300 g", "水: 400 mL", "卵: 1個", "だしの素: 6 g", "油", "キャベツ千切り、小エビ、豚肉、薄切り餅"],
            instructions: ["粉、水、卵、だしを混ぜる。", "熱したフライパンに油を引き、生地を流し、キャベツ、餅、豚肉を乗せる。", "焼き上がったら、青のり、ソース、かつお節、マヨネーズをかける。"]
        }
    },
    {
        id: 15,
        cat: "main",
        imgX: "100%", imgY: "100%",
        vi: {
            title: "Chả giò",
            catName: "Món chính",
            ingredients: ["Thịt: 370 g", "Hành tây + hành lá: 50 g", "Cà rốt: 50 g", "Nấm mèo: 13 g khô (40 g sau khi ngâm)", "Miến: 25 g khô (40 g sau khi ngâm)", "Trứng M: 1 quả (50 g)", "Dashi gà: 10 g", "Muối tiêu: 2 g, Tiêu: 1 g", "Bột ngọt: 2 g, Đường: 8 g", "Nước tương VN: 10 g, Dầu hào: 10 g"],
            instructions: ["Trộn đều tất cả nguyên liệu để làm nhân.", "Dùng bánh tráng cuốn nhân lại thành cuốn chả giò.", "Chiên ngập dầu đến khi vàng giòn."]
        },
        en: {
            title: "Spring Rolls (Cha Gio)",
            catName: "Main",
            ingredients: ["Pork: 370 g", "Onion + Scallion: 50 g", "Carrot: 50 g", "Wood ear mushroom: 13 g dry", "Glass noodles: 25 g dry", "Egg: 1 (50 g)", "Chicken dashi: 10 g", "Salt & pepper: 2 g, Pepper: 1 g", "MSG: 2 g, Sugar: 8 g", "VN Soy sauce: 10 g, Oyster sauce: 10 g"],
            instructions: ["Mix all ingredients well for filling.", "Wrap filling in rice paper.", "Deep fry until golden and crispy."]
        },
        ja: {
            title: "揚げ春巻き",
            catName: "メイン",
            ingredients: ["豚肉: 370 g", "玉ねぎ＋ネギ: 50 g", "人参: 50 g", "きくらげ: 乾燥13 g", "春雨: 乾燥25 g", "卵: 1個 (50 g)", "鶏ガラスープの素: 10 g", "塩コショウ: 2 g、胡椒: 1 g", "味の素: 2 g、砂糖: 8 g", "ベトナム醤油: 10 g、オイスターソース: 10 g"],
            instructions: ["材料をすべてよく混ぜて餡を作る。", "ライスペーパーで包む。", "きつね色になるまで揚げる。"]
        }
    },
    {
        id: 16,
        cat: "main",
        imgX: "0%", imgY: "0%",
        vi: {
            title: "Bánh xếp",
            catName: "Món chính",
            ingredients: ["Bột mì số 13: 372 g", "Nước: 180 g", "Muối: 2 g", "Hạt nêm gà: 2 g", "Dầu ăn: 60 g", "Nhân bánh xếp (đã xào và chuẩn bị trước)"],
            instructions: ["Trộn dầu trước với bột, nhồi 2 phút.", "Đổ nước vào, nhồi 10 phút bằng máy rồi tắt máy.", "Nhồi tay 2 phút, sau đó cho bột nghỉ 15 phút.", "Cán bột ra mỗi cục khoảng 35 g.", "Bỏ nhân vào gói lại và đem đi chiên."]
        },
        en: {
            title: "Fried Dumplings (Banh Xep)",
            catName: "Main",
            ingredients: ["Bread flour (#13): 372 g", "Water: 180 g", "Salt: 2 g", "Chicken bouillon: 2 g", "Cooking oil: 60 g", "Dumpling filling (pre-cooked)"],
            instructions: ["Mix oil with flour first, knead for 2 mins.", "Add water, knead with machine for 10 mins then stop.", "Hand knead for 2 mins, let dough rest for 15 mins.", "Roll dough into 35g portions.", "Add filling, wrap, and deep fry."]
        },
        ja: {
            title: "揚げ餃子（バインセップ）",
            catName: "メイン",
            ingredients: ["強力粉: 372 g", "水: 180 g", "塩: 2 g", "鶏ガラスープの素: 2 g", "油: 60 g", "餃子の餡（事前に炒めたもの）"],
            instructions: ["先に油と粉を混ぜ、2分こねる。", "水を加え、機械で10分こねる。", "手で2分こねた後、生地を15分休ませる。", "35gずつ生地を分割して伸ばす。", "餡を包み、揚げる。"]
        }
    }
];

const translations = {
    vi: {
        title: "Công thức nấu ăn của Nat",
        subtitle: "Lưu trữ và chia sẻ những món ăn ngon mỗi ngày!",
        searchPlaceholder: "Tìm kiếm công thức hoặc nguyên liệu...",
        cats: {
            all: "Tất cả",
            main: "Món chính",
            snack: "Ăn vặt",
            dessert: "Bánh",
            sauce: "Nước chấm"
        },
        ingredients: "Nguyên liệu",
        instructions: "Cách làm"
    },
    en: {
        title: "Nat's Recipes",
        subtitle: "Storing and sharing delicious daily meals!",
        searchPlaceholder: "Search recipes or ingredients...",
        cats: {
            all: "All",
            main: "Main Dish",
            snack: "Snacks",
            dessert: "Dessert",
            sauce: "Sauces"
        },
        ingredients: "Ingredients",
        instructions: "Instructions"
    },
    ja: {
        title: "ナットのレシピ",
        subtitle: "毎日のおいしい料理を保存・共有！",
        searchPlaceholder: "レシピや材料を検索...",
        cats: {
            all: "すべて",
            main: "メイン",
            snack: "おやつ",
            dessert: "デザート",
            sauce: "ソース"
        },
        ingredients: "材料",
        instructions: "作り方"
    }
};

let currentLang = 'vi';
let activeCat = 'all';

// DOM Elements
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const searchInput = document.getElementById('searchInput');
const catContainer = document.getElementById('categoryContainer');
const gridEl = document.getElementById('recipeGrid');
const langBtns = document.querySelectorAll('.lang-btn');

// Modal Elements
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

function init() {
    updateUI();
    renderCategories();
    renderRecipes();
    setupEventListeners();
    setupScrollAnimation();
}

function updateUI() {
    const t = translations[currentLang];
    titleEl.textContent = t.title;
    subtitleEl.textContent = t.subtitle;
    searchInput.placeholder = t.searchPlaceholder;
}

function renderCategories() {
    const t = translations[currentLang].cats;
    catContainer.innerHTML = '';
    
    for (const [key, value] of Object.entries(t)) {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${activeCat === key ? 'active' : ''}`;
        btn.dataset.cat = key;
        btn.textContent = value;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCat = key;
            renderRecipes();
        });
        catContainer.appendChild(btn);
    }
}

function renderRecipes() {
    const query = searchInput.value.toLowerCase();
    gridEl.innerHTML = '';
    
    let delay = 0;

    recipes.forEach(recipe => {
        const data = recipe[currentLang];
        
        // Filter by category
        if (activeCat !== 'all' && recipe.cat !== activeCat) return;
        
        // Filter by search
        const matchTitle = data.title.toLowerCase().includes(query);
        const matchIng = data.ingredients.some(ing => ing.toLowerCase().includes(query));
        
        if (!matchTitle && !matchIng) return;

        const card = document.createElement('div');
        card.className = 'recipe-card animate-on-scroll visible';
        card.style.animationDelay = `${delay}s`;
        delay += 0.1;

        card.innerHTML = `
            <div class="recipe-img" style="background-position: ${recipe.imgX} ${recipe.imgY};"></div>
            <div class="recipe-content">
                <div class="recipe-cat">${data.catName}</div>
                <div class="recipe-title">${data.title}</div>
            </div>
        `;

        card.addEventListener('click', () => openModal(recipe));
        gridEl.appendChild(card);
    });
}

function openModal(recipe) {
    const data = recipe[currentLang];
    const t = translations[currentLang];
    
    let ingHtml = '<ul>' + data.ingredients.map(i => `<li>${i}</li>`).join('') + '</ul>';
    let instHtml = '<ol>' + data.instructions.map(i => `<li>${i}</li>`).join('') + '</ol>';

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${data.title}</h2>
        </div>
        <div class="modal-body">
            <h3>${t.ingredients}</h3>
            ${ingHtml}
            <h3>${t.instructions}</h3>
            ${instHtml}
        </div>
    `;
    modal.style.display = 'block';
}

function setupEventListeners() {
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            updateUI();
            renderCategories();
            renderRecipes();
        });
    });

    searchInput.addEventListener('input', renderRecipes);

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Start app
init();
