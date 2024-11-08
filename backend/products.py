from fastapi import Body,APIRouter,HTTPException,status
from fastapi.middleware import cors
import db_manager
import db_manager_orm
from orm_models import Products

# from pydantic_models import TodoRequest,TodoResponse
router = APIRouter(tags=["products"])
amazon = [
    
      {
        "imageUrl":"https://m.media-amazon.com/images/I/31YE9kV-D+L._SY300_SX300_.jpg",
        "title":"Honeywell High-Speed Type C to RJ45 Gigabit Ethernet Adapter, 10/100/1000 MBPS",
        "price":"1650"
      },
      {"imageUrl":"https://m.media-amazon.com/images/I/510ZopFr3FL._SY741_.jpg",
        "title":"CableCreation USB to Ethernet Adapter, USB 3.0 to 10/100/1000 Gigabit ",
        "price":"1225"
      },
      {
        "imageUrl":"https://m.media-amazon.com/images/I/31YE9kV-D+L._SY300_SX300_.jpg",
        "title":"Honeywell High-Speed Type C to RJ45 Gigabit Ethernet Adapter, 10/100/1000 MBPS",
        "price":"1650"
      }
]


# create product
@router.post('/api/v1/product')
async def createProduct(Product: dict = Body(...)):
    db = db_manager_orm.get_db()
    try:
        obj = Products(**Product)
        db.add(obj)
        db.commit()
    except Exception as e:
        print(e)
    finally:
        db.close()
        return Product


# get all products
@router.get('/api/v1/products')
def getAllProduct():
    try:
        db = db_manager.get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM product")
        products = cursor.fetchall()
        db.close()
        return products
    except Exception as e:
        print(e)
    return amazon


# get a product by title
@router.get('/api/v1/products/{title}')
def getProductByTitle(title: str):
    response = None
    db = db_manager.get_db()
    try:
        db = db_manager.get_db()
        cursor = db.cursor()
        cursor.execute(f"SELECT * FROM product where title = {title}")
        product = cursor.fetchall()
        if product == None:
            raise HTTPException(status.HTTP_404_NOT_FOUND,detail="product not found")
        else:
            response = {"status": "200", "message":"todo found","data":product}
        db.close()
        
    except Exception as e:
        print("Error:",e)
        response = {"status":500,"message":"Internal Server Error","data":{}}
    
    return response
        
        
# update a product by title

# delete a product by title
@router.delete('/api/v1/del_products/{title}')
def deleteProductByTitle(title: str):
    response = {"status": 404, "message":"product not found to delete","data":{}}
    for prod_idx,product in enumerate(amazon):
        if product['title'] == title:
            amazon.pop(prod_idx)
            response = {"status": 200, "message":"todo deleted","data":product}
            break
    return response


@router.put('/api/v1/product/update/{title}')
def updateProductByPut(title:str,Product: dict = Body(...)):
    response = None
    for product in range(len(amazon)):
        if amazon[product]['title'] == title:
            amazon[product]=Product
            response = {"status": "200", "message":"todo found","data":product}
            break
    if response:
        return response
    else:
        raise HTTPException(status.HTTP_404_NOT_FOUND,detail="product not found")
    