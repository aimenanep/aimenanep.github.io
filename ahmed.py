from django.shortcuts import render
from django.views.generic.base import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product,Attribute, ProductAttribute
from django.core.paginator import Paginator
from categories.models import Category 
from .serializers import AttributesSerializer, ProductSerializer, ProductAttributeSerializer, SingleProductSerializer,ProductFrontSerializer

class Shop(TemplateView):
    def get(self,request,slug=""):
        page = request.GET.get('page')
        if slug == "":
            products=Product.objects.all().order_by('-id')  
        else:
            category=Category.objects.get(slug=slug)
            cat=[cat.id for cat in Category.objects.filter(parent=category)]
            cat.append(category.id)
            products=Product.objects.filter(category__id__in=cat)
        if request.GET.get('q'):
            products=products.filter(name__icontains=request.GET.get('q'))
        paginator = Paginator(products, 18)
        products_list = paginator.get_page(page)
        title= Category.objects.get(slug=slug).name if slug !="" else "boutique"
        return render(request,"products/shop.html",{"products":products_list , "title":title})


class SingleProduct(TemplateView):
    def get(self,request,slug):
        return render(request,"products/single.html",{"product":Product.objects.get(slug=slug),"random_products":Product.objects.order_by('?')[:4]})




class ProductAPI(APIView):

    def pagination_response(self,products,json,result_length):
        response={
        'pages':products.paginator.num_pages,
        'result':json.data,
        'length':result_length,
        }
        try:
            response['previous']=products.previous_page_number()
        except:
            pass
        try:
            response['next']=products.next_page_number()
        except:
            pass
        return response


    def get(self,request,slug="",category_slug="",format=None):
        print("***************************************************** category is ")
        print(request.GET.get("category"))
        print("***************************************************** page is ")
        print(request.GET.get("page"))
        category_slug=request.GET.get("category") if request.GET.get("category") else ""
        if slug!="":
            serializer=SingleProductSerializer(Product.objects.get(slug=slug),many=False)
            return Response(serializer.data,status=200)
            
        if request.GET.get("q"):
            products_list=Product.objects.filter(name__icontains=request.GET.get("q"))
            products_json=ProductSerializer(products_list,many=True)
            return Response(products_json.data, status=200)
        else:

            if category_slug == "":
                products_list=Product.objects.all().order_by('-id')  
            else:
                category=Category.objects.get(slug=category_slug)
                cat=[cat.id for cat in Category.objects.filter(parent=category)]
                cat.append(category.id)
                products_list=Product.objects.filter(category__id__in=cat)

            if request.GET.get('query'):
                products_list=products_list.filter(name__icontains=request.GET.get('q'))


            paginator = Paginator(products_list, 20)
            page = request.GET.get('page') if request.GET.get('page') and request.GET.get('page')!="0" else None
            products=paginator.get_page(page)
            products_json=ProductSerializer(products,many=True)

            return Response(self.pagination_response(products,products_json,len(products_list)), status=200) 



class AttributesAPI(APIView):
    def get(self,request,productid,index,format=None):
        products_attributes=ProductAttribute.objects.filter(product__id=productid).distinct()
        

        attributes_values=[]
        for product_attribute in products_attributes:
            att_value=product_attribute.attributes_values.all().distinct()
            print("first ",att_value[0].value)
            print("second ",att_value[1].value)
            print("third ",att_value[2].value)
            print("forth ",att_value[3].value)
            name=att_value[int(index)].attribute.name
            has_all_attributes_values=True
            print("name is ",name)
            print("index is ",index)
            if request.GET.get("ids"):
                 ids=[int(idd) for idd in request.GET.get("ids").split(",")]
                 i=0
                 for idd in ids:
                     print("looping ",att_value[i].value)
                     if att_value[i].id!=ids[i]:
                         has_all_attributes_values=False
                     i+=1        
            if has_all_attributes_values:
                if len(list (filter(lambda att: att['id'] == att_value[index].id , attributes_values) ))==0: 
                    attributes_values.append({"id":att_value[index].id,"value":att_value[index].value})
        return  Response({"name":name,"attribute_values":attributes_values},status=200)  
        
        


class SyncProductApi(APIView):
    def post(self,request,productid,index,format=None):
        for dt in request.data:
            try:
                p=Product.objects.get(id=dt["id"])
                p.stock=dt["stock"]
                if len(p["attributes"]):
                    for pattr in p["attributes"]:
                        p_attr=ProductAttribute.objects.get(id=pattr["id"])
                        p_attr.stock=pattr["stock"]
                        p_attr.save()
            except:
                p=Product.objects.create(
                    id=dt["id"],
                    stock=dt["stock"],
                    name=dt["name"],
                    category=Category.objects.get(id=dt["category"]),
                    stock=dt["stock"],
                    price=dt["price"],
                    promotional=dt["promotional"],
                    description=dt["description"],
                    image=dt["image"],
                    seo=dt["seo"],
                    is_new=dt["is_new"],
                    is_valid=dt["is_valid"],
                    arrivage=dt["arrivage"],
                    on_fb=dt["on_fb"],  
                )
                if len(p["attributes"]):
                    for pattr in p["attributes"]
                        ProductAttribute.objects.create(
                        id=pattr["id"],
                        product=p,
                        attributes_values=pattr["attributes_values"],
                        stock=pattr["stock"],
                        price=pattr["price"],
                        image=pattr["image"],
                        )
        