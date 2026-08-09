function twoSum(nums: number[], target: number): number[] {
    // for(let i=0;i<nums.length;i++){
    //     for (let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]==target){
    //             return [i,j]
    //         }
    //     }
    // }
    //2nd approach

    let helper = new Map<number, number>()

    for (let i=0;i<nums.length;i++){
        let rem = target - nums[i];

        // if(map.has(rem)){
        //     return [i, map.get(rem)]
        // }
        // map.set(nums[i],i)

        if(helper.has(rem)){
            return [i, helper.get(rem)]
        } 
        helper.set(nums[i],i);
    }


}
    
    