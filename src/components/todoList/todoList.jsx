import React, {useState} from "react";
import Item from "./item/Item";
import AddNewItem from "./addItemForm/addItemForm";
import styles from './todoList.module.css'

const TodoList = ({items, addItem, deleteItem, completeItem, completeAllItem}) => {


    const [filtersVisible, setFiltersVisible] = useState(false)
    const showFilters = () => {
        setFiltersVisible(true)
    }
    const hideFilters = () => {
        setFiltersVisible(false)
    }

    const [filterType, setFilterType] = useState(`all`)
    const seeAllItems = () => {
        setFilterType(`all`)
        hideFilters()
    }
    const seeDoneItems = () => {
        setFilterType(`done`)
        hideFilters()
    }
    const seeUndoneItems = () => {
        setFilterType(`undone`)
        hideFilters()
    }


        return <div className={styles.todoBody}>
            <h2 className={styles.title}>Plan for today:</h2>
            <AddNewItem addItem={addItem}
                        items={items}/>


            {
                items.length > 0 && !filtersVisible &&
                <button className={styles.filterButton}
                        onClick={showFilters}>Filters</button>
            }

            {
                items.length > 0 && filtersVisible &&
                <div className={styles.filters}>
                    <button className={styles.filter}
                            onClick={seeAllItems} >All</button>
                    <button className={styles.filter}
                            onClick={seeDoneItems} >Done</button>
                    <button className={styles.filter}
                            onClick={seeUndoneItems} >Undone</button>
                </div>
            }
            <div>
                {
                    items.length === 0
                        ? <h3 className={styles.itemsReplace}>Add your daily goals here to
                            be shure you won't forget something </h3>
                        : <div className={styles.itemsList}>
                            {
                                items.map(i => <Item key={i.id}
                                                     item={i}
                                                     deleteItem={deleteItem}
                                                     completeItem={completeItem}
                                                     filterType={filterType}/>)
                            }
                        </div>
                }
            </div>
            {
                items.length > 0 &&
                <button className={styles.completeAll}
                        onClick={completeAllItem}>Complete all</button>
            }

        </div>
}

export default TodoList