package com.zgs.modules.system.mapper;

import java.util.List;

import com.zgs.modules.system.entity.SysPermission;
import com.zgs.modules.system.model.TreeModel;
import org.apache.ibatis.annotations.Param;
import com.zgs.modules.system.entity.SysPermission;
import com.zgs.modules.system.model.TreeModel;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 * 菜单权限表 Mapper 接口
 * </p>
 *
 * @author scott
 * @since 2018-12-21
 */
public interface SysPermissionMapper extends BaseMapper<SysPermission> {
	
	public List<TreeModel> queryListByParentId(@Param("parentId") String parentId);
	
	/**
	  *   根据用户查询用户权限
	 */
	public List<SysPermission> queryByUser(@Param("username") String username);

}
