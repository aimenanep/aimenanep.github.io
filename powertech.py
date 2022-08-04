def sync_products(products):
    json_data=[{
                    "id": p.id,
                    "stock": p.stock,
                    "name": p.name,
                    "category": Category.objects.get(id=p.category),
                    "stock": p.stock,
                    "price": p.price,
                    "promotional": p.promotional,
                    "description": p.description,
                    "image": p.image,
                    "seo": p.seo,
                    "is_new": p.is_new,
                    "is_valid": p.is_valid,
                    "arrivage": p.arrivage,
                    "on_fb": p.on_fb,
                    "attributes":[{
                        "id":pattr.id,
                        "attributes_values":pattr.attributes_values,
                        "stock":pattr.stock,
                        "price":pattr.price,
                        "image":pattr.image,
                    } for pattr in ProductAttribute.objects.filter(product=p)]
    } for p in products]


    r = requests.post(f'https://electronicshb.com/products/api/sync', json=json_data)
    print(r)